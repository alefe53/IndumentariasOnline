export const errorMiddleware = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}]`, err);

  // Personalizar mensajes según el tipo de error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      ok: false,
      message: "Error de validación",
      error: err.message,
    });
  }
  if (err.name === "UnauthorizedError") {
    // Si el error viene de basicAuth, setear el header
    if (err.wwwAuthenticate) {
      res.set("WWW-Authenticate", err.wwwAuthenticate);
    }
    return res.status(401).json({
      ok: false,
      message: "No autorizado",
      error: err.message,
    });
  }
  if (err.name === "InternalServerError") {
    return res.status(500).json({
      ok: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
  if (err.name === "SupabaseConfigError") {
    return res.status(500).json({
      ok: false,
      message: "Error de configuración de Supabase",
      error: err.message,
    });
  }
  if (err.name === "SupabaseClientInitError") {
    return res.status(500).json({
      ok: false,
      message: "Error al inicializar el cliente de Supabase",
      error: err.message,
    });
  }
  res.status(500).json({
    ok: false,
    message: "Error interno del servidor",
    error: err.message,
  });
};
