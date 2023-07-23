import { relations, type InferModel } from "drizzle-orm";
import {
	boolean,
	decimal,
	int,
	json,
	mysqlEnum,
	mysqlTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
	id: serial("id").primaryKey(),
	name: varchar("userId", { length: 191 }).notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
	createdAt: timestamp("createdAt").defaultNow(),
});

export type Product = InferModel<typeof products>;
