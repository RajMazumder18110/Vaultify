/** @notice Local imports */
import { env } from "@/config/environments";

/// Project constants
export const DB_MIGRATION_PATH = "./migrations";
export const DB_SCHEMA_PATH = "./src/models/index.ts";
export const isDevelopment = env.NODE_ENV === "development";
