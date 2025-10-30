import "dotenv/config"; // ensure .env is loaded when a Prisma config is present
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  // Override datasource URL here so schema doesn't need to resolve env() itself
  datasource: {
    url: env("DATABASE_URL"),
  },
});
