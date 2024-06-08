import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { salons } from "./salons";

export const employees = pgTable("employees", {
  id: uuid("id").primaryKey().defaultRandom(),
  salonId: uuid("salon_id")
    .unique()
    .references(() => salons.id, { onDelete: "cascade" }),
  salonName: text("salon_name").notNull(),
  name: text("name").notNull(),
  // TODO: occupation - enum
  occupation: text("occupation").notNull(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
