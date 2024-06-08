import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schemas/*",
  out: "./src/server/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
