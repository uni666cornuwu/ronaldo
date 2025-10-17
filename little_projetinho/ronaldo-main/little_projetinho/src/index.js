import express from "express";
import cors from "cors";
import sequelize from "./config/database.js"
import userRoutes from "./routes/userRoutes.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(cors({ origin: "*"}));

sequelize   
    .sync()
    .then(()=> {
        console.log("Datebase connected and synced.");
        app.listen(PORT , () =>
            console.log(`server running on 
                http://localhost:${port}`) //tem que por o ` louco pra interpretar direito, se colocar ' ou " "
                //vai mostrar o cifrau
            );
    });
    .catch ((err)=>console.error("Database conection failed:", err));