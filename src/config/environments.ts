/** @notice library imports */
import { ZodError } from "zod";
/** @notice local imports */
import { envSchema, type Environment } from "@/schema/environmentSchema";

/// Parsing envs
export let env: Environment;
try {
  env = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError) {
    console.error("Environments are not correct :(");
    console.error(error.flatten().fieldErrors);
    process.exit(1);
  }
}
