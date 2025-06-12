import Express from "express";

const app = Express();
const port = 5001;

app.listen(port,()=>{
    console.log(`API listening at port ${port}`);
});