/** @notice library imports */
import { defineConfig } from "drizzle-kit";
/// External imports
import { env } from "@/config/environments";
import { DB_SCHEMA_PATH, DB_MIGRATION_PATH } from "@/config/constants";

/// Drizzle config
export default defineConfig({
  schema: DB_SCHEMA_PATH,
  out: DB_MIGRATION_PATH,
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_DATABASE_URI,
  },
});
