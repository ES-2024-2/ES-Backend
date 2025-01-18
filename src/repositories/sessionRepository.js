// src/repositories/sessionRepository.js
import { connectToDatabase } from "../config/database.js";

// Create a new session
export const createSession = async ({ userId, token }) => {
  const db = await connectToDatabase();
  await db.run(
    "INSERT INTO secoes (id_usuario, token) VALUES (?, ?)",
    [userId, token]
  );
  await db.close();
};

// Delete a session
export const deleteSession = async (token) => {
  const db = await connectToDatabase();
  const result = await db.run("DELETE FROM secoes WHERE token = ?", [token]);
  await db.close();
  return result.changes > 0;
};

// Get a session by token
export const findSessions = async () => {
  const db = await connectToDatabase();
  const session = await db.get("SELECT * FROM secoes");
  await db.close();
  return session;
};

// // Get a session by user ID
// export const findSessionByUserId = async (userId) => {
//   const db = await connectToDatabase();
//   const session = await db.get("SELECT * FROM secoes WHERE id_usuario = ?", [userId]);
//   await db.close();
//   return session;
// };