// src/app.js

import express from "express";
import path from "path";
import { config } from "../config/config.js";
import homeRouter from "./routers/home.router.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import productoRouter from "./routers/producto.router.js";


const app = express();

// Configuración de vistas
app.set("views", config.paths.VIEWS);
app.set("view engine", "ejs");

// Archivos estáticos (para imágenes, CSS, etc.)
app.use(express.static(config.paths.PUBLIC));

//para parsear json
app.use(express.json());

// Rutas
app.use("/home", homeRouter);
app.use("/productos", productoRouter);


// Redirige la raíz al home
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.listen(config.server.PORT, () => {
  const message = `👓 🤖 SERVER is UP at http://${config.server.HOST}:${config.server.PORT} 🤖`;
  console.log(message);
});

app.use(errorMiddleware);

