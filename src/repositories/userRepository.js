import { connectToDatabase } from "../config/database.js";

// Find a user by email
export const findByEmail = async (email) => {
  const db = await connectToDatabase();
  const user = await db.get("SELECT * FROM usuarios WHERE email = ?", [email]);
  await db.close();
  return user;
};

// Create a new user
export const createUser = async (userData) => {
  const db = await connectToDatabase();
  const { nome, email, senha } = userData;

  const result = await db.run(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha]
  );

  const newUser = {
    id_usuario: result.lastID, // id_usuario is the primary key
    nome,
    email,
    senha,
  };

  await db.close();
  return newUser;
};