// src/repositories/sessionRepository.js
import { connectToDatabase } from "../config/database.js";

export const createSession = async ({ userId, token }) => {
  const db = await connectToDatabase();
  await db.run("DELETE FROM secoes WHERE id_usuario = ?", [userId]);
  await db.run(
    "INSERT INTO secoes (id_usuario, token) VALUES (?, ?)",
    [userId, token]
  );
  await db.close();
};

export const deleteSession = async (token) => {
  const db = await connectToDatabase();
  const result = await db.run("DELETE FROM secoes WHERE token = ?", [token]);
  await db.close();
  return result.changes > 0;
};

export const findSessions = async () => {
  const db = await connectToDatabase();
  const session = await db.get("SELECT * FROM secoes");
  await db.close();
  return session;
};

export const findSessionByUserId = async (userId) => {
  const db = await connectToDatabase();
  const session = await db.get("SELECT * FROM secoes WHERE id_usuario = ?", [userId]);
  await db.close();
  return session;
};
