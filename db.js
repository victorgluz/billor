import dotenv from "dotenv";
import http from "http";
import { neon } from "@neondatabase/serverless";

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);
