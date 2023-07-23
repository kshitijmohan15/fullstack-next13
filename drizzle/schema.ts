import { mysqlTable, mysqlSchema, AnyMySqlColumn, serial, varchar, decimal, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const products = mysqlTable("products", {
	id: serial("id").primaryKey().notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	price: decimal("price", { precision: 10, scale: 2 }).notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
});