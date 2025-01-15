import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function connectToDatabase() {
  const db = await open({
    filename: './database.db', 
    driver: sqlite3.Database,
  });

  console.log("Conexão com o banco de dados SQLite estabelecida.");
  return db;
}
