import "dotenv/config";

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    // ค่า placeholder ใช้เฉพาะตอน prisma generate (ไม่ต่อฐานข้อมูล) ค่าจริงมาจาก .env
    url: process.env["DIRECT_URL"] ?? "postgresql://user:password@localhost:5432/placeholder",
    shadowDatabaseUrl: process.env["SHADOW_DATABASE_URL"],
  },
});