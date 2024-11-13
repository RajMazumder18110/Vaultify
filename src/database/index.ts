/** @notice library imports */
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
/// External imports
import * as schema from "@/models";
import { env } from "@/config/environments";

/// Postgres DB client
export const pgClient = postgres(env.POSTGRES_DATABASE_URI);
export const database = drizzle(pgClient, { schema });
