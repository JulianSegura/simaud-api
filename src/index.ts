import Express from "express";
import usersRoutes from "./features/users/routes";

const port = 5001;
const app = Express();
app.use(Express.json());


app.listen(port,()=>{
    console.log(`API iniciada en el puerto ${port}`);
});

// Rutas base de los features
app.use("/api/users", usersRoutes);