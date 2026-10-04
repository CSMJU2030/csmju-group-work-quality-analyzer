import { AuthController } from './auth.controller.js';

function createController() {
  const authService = {
    register: vi.fn().mockResolvedValue({ id: 'u1' }),
    login: vi.fn().mockResolvedValue({ accessToken: 't' }),
  };

  const controller = new AuthController(authService as never);

  return { controller, authService };
}

describe('AuthController', () => {
  it('register ส่ง name, email, password ไปให้ AuthService ตามลำดับ', async () => {
    const { controller, authService } = createController();

    const result = await controller.register({
      name: 'Member A',
      email: 'a@example.com',
      password: 'secret123',
    });

    expect(authService.register).toHaveBeenCalledWith(
      'Member A',
      'a@example.com',
      'secret123',
    );
    expect(result).toEqual({ id: 'u1' });
  });

  it('login ส่ง email, password ไปให้ AuthService ตามลำดับ', async () => {
    const { controller, authService } = createController();

    const result = await controller.login({
      email: 'a@example.com',
      password: 'secret123',
    });

    expect(authService.login).toHaveBeenCalledWith(
      'a@example.com',
      'secret123',
    );
    expect(result).toEqual({ accessToken: 't' });
  });
});