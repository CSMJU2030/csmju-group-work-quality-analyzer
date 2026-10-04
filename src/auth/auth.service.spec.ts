import * as bcrypt from 'bcrypt';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service.js';

type TestUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
};

function createService() {
  const prisma = {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
  };

  const jwtService = {
    signAsync: vi.fn().mockResolvedValue('signed-token'),
  };

  const service = new AuthService(prisma as never, jwtService as never);

  return { service, prisma, jwtService };
}

async function userWithPassword(plain: string): Promise<TestUser> {
  return {
    id: 'u1',
    name: 'Member A',
    email: 'a@example.com',
    password: await bcrypt.hash(plain, 4),
    role: 'USER',
  };
}

describe('AuthService', () => {
  describe('register', () => {
    it('สมัครสำเร็จ: เก็บรหัสผ่านแบบ hash และไม่ส่งรหัสผ่านกลับ', async () => {
      const { service, prisma } = createService();

      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.create.mockImplementation(({ data }) =>
        Promise.resolve({ id: 'u1', role: 'USER', ...data }),
      );

      const result = await service.register(
        'Member A',
        'a@example.com',
        'secret123',
      );

      const savedData = prisma.user.create.mock.calls[0][0].data;

      expect(savedData.password).not.toBe('secret123');
      expect(await bcrypt.compare('secret123', savedData.password)).toBe(true);

      expect(result).toEqual({
        id: 'u1',
        name: 'Member A',
        email: 'a@example.com',
        role: 'USER',
      });
      expect(result).not.toHaveProperty('password');
    });
it('อีเมลซ้ำ: ไม่สร้างผู้ใช้ใหม่และโยน ConflictException', async () => {
  const { service, prisma } = createService();

  prisma.user.findUnique.mockResolvedValue(await userWithPassword('x'));

  await expect(
    service.register('Member A', 'a@example.com', 'secret123'),
  ).rejects.toBeInstanceOf(ConflictException);

  expect(prisma.user.create).not.toHaveBeenCalled();
});
  });

  describe('login', () => {
    it('login สำเร็จ: คืน accessToken และข้อมูลผู้ใช้ (ไม่มี password)', async () => {
      const { service, prisma, jwtService } = createService();

      prisma.user.findUnique.mockResolvedValue(
        await userWithPassword('secret123'),
      );

      const result = await service.login('a@example.com', 'secret123');

      expect(result.accessToken).toBe('signed-token');
      expect(result.user).toEqual({
        id: 'u1',
        name: 'Member A',
        email: 'a@example.com',
        role: 'USER',
      });
      expect(result.user).not.toHaveProperty('password');
    });

    it('JWT payload มี sub, email และ role ถูกต้อง', async () => {
      const { service, prisma, jwtService } = createService();

      prisma.user.findUnique.mockResolvedValue({
        ...(await userWithPassword('secret123')),
        role: 'ADMIN',
      });

      await service.login('a@example.com', 'secret123');

      expect(jwtService.signAsync).toHaveBeenCalledWith({
        sub: 'u1',
        email: 'a@example.com',
        role: 'ADMIN',
      });
    });

    it('ไม่พบผู้ใช้: โยน UnauthorizedException', async () => {
      const { service, prisma, jwtService } = createService();

      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login('nobody@example.com', 'secret123'),
      ).rejects.toBeInstanceOf(UnauthorizedException);

      expect(jwtService.signAsync).not.toHaveBeenCalled();
    });

    it('รหัสผ่านผิด: โยน UnauthorizedException และไม่ออก token', async () => {
      const { service, prisma, jwtService } = createService();

      prisma.user.findUnique.mockResolvedValue(
        await userWithPassword('secret123'),
      );

      await expect(
        service.login('a@example.com', 'wrong-password'),
      ).rejects.toBeInstanceOf(UnauthorizedException);

      expect(jwtService.signAsync).not.toHaveBeenCalled();
    });

    it('ข้อความ error เมื่อไม่พบผู้ใช้และรหัสผ่านผิดต้องเหมือนกัน (ไม่เปิดเผยว่าอีเมลมีในระบบ)', async () => {
      const { service, prisma } = createService();

      prisma.user.findUnique.mockResolvedValueOnce(null);
      const notFound = await service
        .login('nobody@example.com', 'x')
        .catch((e: Error) => e.message);

      prisma.user.findUnique.mockResolvedValueOnce(
        await userWithPassword('secret123'),
      );
      const wrongPassword = await service
        .login('a@example.com', 'wrong')
        .catch((e: Error) => e.message);

      expect(notFound).toBe(wrongPassword);
    });
  });
});