import { Router } from "express";
import { loginController } from "./login/controller";

const router = Router();

// Endpoint: POST /api/users/login
router.post("/login", loginController);
//otras rutas
//...



// Exporta el router como módulo
export default router;