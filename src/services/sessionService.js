// src/services/sessionService.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";
import * as sessionRepository from "../repositories/sessionRepository.js";

const SECRET_KEY = "your_secret_key"; // Use an environment variable in production

export const loginUser = async (email, senha) => {
  // Retrieve user by email
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Error("Email ou senha inválidos.");
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(senha, user.senha);
  if (!isPasswordValid) {
    throw new Error("Email ou senha inválidos.");
  }

  // Generate a JWT token
  const token = jwt.sign({ id_usuario: user.id_usuario, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  await sessionRepository.createSession({ userId: user.id_usuario, token });

  return { token, user };
};

export const deleteUser = async (token) => {
  
  await sessionRepository.deleteSession(token);

  return { };
};

export const findSessions = async () => {
  return await sessionRepository.findSessions();
};
