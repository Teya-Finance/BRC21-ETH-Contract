import * as process from "process";

if (process.env.TEST_ENV_VAR !== "test") {
  process.exit(123);
}
