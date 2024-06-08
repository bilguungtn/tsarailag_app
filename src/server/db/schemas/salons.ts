import { relations } from "drizzle-orm";
import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { employees } from "./employees";

export const salons = pgTable("salons", {
  id: uuid("id").primaryKey().defaultRandom(),
  salonName: text("salon_name").notNull(),
  description: text("description"),
  address: text("address"),
  // TODO:
  // review
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const salons_relations = relations(salons, ({ many, one }) => ({
  salonEmployees: one(employees, {
    fields: [salons.id],
    references: [employees.salonId],
  }),
}));
