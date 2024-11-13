/** @notice library imports */
import { z } from "zod";

/// Schema
export const envSchema = z.object({
  // DEFAULTS //
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "production"]).default("development"),

  /// Mandatory ///
  KAFKA_URI: z.string(),
  ELASTICSEARCH_URI: z.string(),
  POSTGRES_DATABASE_URI: z.string(),
});

export type Environment = z.infer<typeof envSchema>;
