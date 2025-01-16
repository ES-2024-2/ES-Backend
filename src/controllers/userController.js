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

