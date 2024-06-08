import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { salons } from "./salons";

export const category = pgEnum("category", [
  "hair_dress",
  "manicure",
  "makeup",
  "massage",
]);

export const payment_status = pgEnum("payment_status", [
  "waiting",
  "successful",
  "failed",
]);

export const appointments = pgTable("appointments", {
  id: uuid("id").primaryKey().defaultRandom(),
  salonId: uuid("salon_id")
    .unique()
    .references(() => salons.id, { onDelete: "cascade" }),
  date: timestamp("date").notNull(),
  category: category("category").notNull(),
  price_full: integer("price_full"),
  canceled: boolean("canceled").default(false),
  paymentStatus: payment_status("payment_status").notNull(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
