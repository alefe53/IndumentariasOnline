// src/app.js

import express from "express";
import { config } from "../config/config.js";
import homeRouter from "./routers/home.router.js";

const app = express();

// Especificar la ubicación de tus archivos de plantillas (views)
app.set("views", config.paths.VIEWS);

// Configurar archivos estáticos correctamente
app.use(express.static(config.paths.PUBLIC));

app.use("/home", homeRouter);

// --- RUTAS GENERALES DE LA APLICACIÓN ---
app.get("/", (req, res) => {
	//res.json({url:config.SUPABASE_URL}) //prueba de que me conecto a
	res.redirect("/home");
});

app.listen(config.server.PORT, () => {
	const message = `👓 🤖 SERVER is UP at http://${config.server.HOST}:${config.server.PORT} 🤖`;
	console.log(message);
});
