import { User } from "./types";

// Simulación de base de datos en memoria
const usersDb: User[] = [
  {
    id: "1",
    email: "admin@simaud.com",
    name: "Admin User",
    passwordHash: "123456", // Simulado para pruebas. 
    role: "admin",
  },
];

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = usersDb.find((u) => u.email === email);
  return user || null;
};