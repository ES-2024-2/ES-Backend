import { z } from "zod";

// User schema for validation
export const userSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Formato de email inválido."),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres."),
});

// Validate user data
export const validateUser = (data) => {
  const result = userSchema.safeParse(data);
  if (!result.success) {
    throw new Error(result.error.errors.map((err) => err.message).join(", "));
  }
  return result.data;
};

// Serialize user to exclude sensitive data
export const serializeUser = (user) => {
  const { senha, ...userWithoutPassword } = user;
  return userWithoutPassword;
};