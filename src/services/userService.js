import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";
import { validateUser } from "../models/userModel.js";

const SECRET_KEY = "your_secret_key"; // Use an environment variable in production

// Register a new user
export const registerUser = async (userData) => {
  // Validate input data
  validateUser(userData);

  const { nome, email, senha } = userData;

  // Check if the email is already registered
  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    throw new Error("Email já está em uso.");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(senha, 10);

  // Save the user in the database
  const newUser = await userRepository.createUser({
    nome,
    email,
    senha: hashedPassword,
  });

  return newUser;
};

