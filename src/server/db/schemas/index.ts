import * as appointments from "./appointments";
import * as salons from "./salons";
import * as employees from "./employees";

export const schema = {
  ...appointments,
  ...salons,
  ...employees,
};

export type Schema = typeof schema;
