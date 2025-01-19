// src/services/sessionService.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";
import * as sessionRepository from "../repositories/sessionRepository.js";

const SECRET_KEY = "your_secret_key"; 

export const loginUser = async (email, senha) => {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Error("Email ou senha inválidos.");
  }

  const isPasswordValid = await bcrypt.compare(senha, user.senha);
  if (!isPasswordValid) {
    throw new Error("Email ou senha inválidos.");
  }

  const existingSession = await sessionRepository.findSessionByUserId(user.id_usuario);
  if (existingSession) {
    return { token: existingSession.token, user };
  }

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
  return sessionRepository.findSessions;
};
