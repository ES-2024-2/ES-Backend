import path from "path";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const dbPath = path.resolve("src/config/database.db");

export async function connectToDatabase() {
    const db = await open({
        filename: dbPath, 
        driver: sqlite3.Database,
    });

    console.log("Conexão com o banco de dados SQLite estabelecida.");
    return db;
}
