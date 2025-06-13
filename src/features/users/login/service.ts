import { findUserByEmail } from "../repository";
import { AuthenticatedUser } from "../types";

export const loginService = async (email: string,password: string): Promise<AuthenticatedUser> => {
  let user = await findUserByEmail(email);
  if (!user) throw new Error("Credenciales invalidos");

  let isPasswordValid = password === user.passwordHash; // Simulación de validación
  if (!isPasswordValid) throw new Error("Credenciales invalidos");

  return {
    id: user.id,
    name:user.name,
    email: user.email,
    role:user.role,
    token: "jwt-token-simulado", // usar JWT real
  };
};