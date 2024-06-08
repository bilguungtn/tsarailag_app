import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { schema } from "../schemas";

export const AppointmentModel = createSelectSchema(schema.appointments);
export type AppointmentModel = z.infer<typeof AppointmentModel>;

export const EmployeeModel = createSelectSchema(schema.employees);
export type EmployeeModel = z.infer<typeof EmployeeModel>;

export const SalonModel = createSelectSchema(schema.salons);
export type SalonModel = z.infer<typeof SalonModel>;
