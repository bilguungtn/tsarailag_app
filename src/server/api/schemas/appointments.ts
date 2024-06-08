import { AppointmentModel } from "@/server/db/models";
import { z } from "zod";

export const AppointmentExtended = AppointmentModel.omit({});
export type AppointmentExtended = z.infer<typeof AppointmentExtended>;

export const AppointmentList = AppointmentModel.omit({
  //   bodyText: true,
});
export type AppointmentList = z.infer<typeof AppointmentList>;

export const AppointmentQuery = z.object({
  id: z.string(),
});
export type AppointmentQuery = z.infer<typeof AppointmentQuery>;

export const AppointmentCreate = AppointmentModel.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type AppointmentCreate = z.infer<typeof AppointmentCreate>;

export const AppointmentUpdate = AppointmentModel.omit({
  id: true,
  createdAt: true,
});
export type AppointmentUpdate = z.infer<typeof AppointmentUpdate>;

export const AppointmentDelete = AppointmentModel.pick({
  id: true,
});
export type AppointmentDelete = z.infer<typeof AppointmentDelete>;

// export const AppointmentStatusEnum = z.enum(Appointments.status.enumValues);
// export type AppointmentStatusEnum = z.infer<typeof AppointmentStatusEnum>;
