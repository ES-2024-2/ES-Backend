import * as userService from "../services/userService.js";
import { serializeUser } from "../models/userModel.js";

// Controller for user registration
export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    // Call service layer to handle business logic
    const newUser = await userService.registerUser(userData);

    // Respond with serialized user data
    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: serializeUser(newUser), // Ensure user data does not include password
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for user login
export const loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Call service layer to handle login logic
    const { token, user } = await userService.loginUser(email, senha);

    // Respond with token and serialized user data
    res.status(200).json({
      message: "Login realizado com sucesso!",
      token,
      user: serializeUser(user), // Exclude password from user object
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};