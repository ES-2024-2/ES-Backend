import * as userService from "../services/userService.js";
import { serializeUser } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const newUser = await userService.registerUser(userData);

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: serializeUser(newUser), 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

