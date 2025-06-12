// src/controllers/homepage.controller.js

import { getProductosDestacados } from "../services/producto.service.js";

export const getHomePage = async (req, res, next) => {
  try {
    console.log("Controlador: Solicitando página de inicio...");

    const productos = await getProductosDestacados();
    console.log(
      "Controlador: Productos recibidos del servicio:",
      productos.length > 0 ? `${productos.length} productos` : "Ningún producto"
    );

    res.render("home", {
      pageTitle: "IndumentariasOnline - Inicio",
      productos: productos,
    });
  } catch (error) {
    console.error(
      "Error en homepage.controller al intentar obtener productos y renderizar la página de inicio",
      error
    );
    next(error);
  }
};
