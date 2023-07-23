import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schema from "./schema";
import dotenv from "dotenv";

dotenv.config({
	path: ".env.local",
});
// Create the connection
const connection = connect({
	url: process.env.DATABASE_URI
});
export const db = drizzle(connection, { schema });
