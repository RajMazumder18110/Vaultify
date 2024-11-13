/** @notice library imports */
import { migrate } from "drizzle-orm/postgres-js/migrator";
/// External imports
import { database, pgClient } from "@/database";
import { DB_MIGRATION_PATH } from "@/config/constants";

/// Migration runner
migrate(database, { migrationsFolder: DB_MIGRATION_PATH })
  .then(() => pgClient.end())
  .catch((err) => console.error(err))
  .finally(() => console.log(`🔥 Migration successful`));
