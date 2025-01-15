// src/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database.js";
import restaurantRouter from "./routes/restaurantRoutes.js";
import userRouter from "./routes/userRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";
import sessionRouter from "./routes/sessionRoutes.js";
import "./config/initialize-db.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let db;
try {
  db = await connectToDatabase();
} catch (error) {
  console.error("Erro ao conectar ao banco de dados:", error);
  process.exit(1);
}

app.use("/", restaurantRouter);
app.use("/", userRouter);
app.use("/", reviewRouter);
app.use("/", sessionRouter);

app.get("/health", async (req, res) => {
  try {
    await db.get("SELECT 1");
    res.status(200).json({ message: "Conexão com o banco de dados estável." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao conectar ao banco de dados." });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
