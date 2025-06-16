import basicAuth from "basic-auth";

const VALID_USER = process.env.BASIC_USER || "juan";
const VALID_PASS = process.env.BASIC_PASS || "juan123";

export const authMiddleware = (req, res, next) => {
  const user = basicAuth(req);

  console.log(user);

  const validUser =
    user && user.name === VALID_USER && user.pass === VALID_PASS;

  if (!validUser) {
    // En vez de responder aquí, creamos un error y lo pasamos a next()
    const err = new Error("Authentication required.");
    err.name = "UnauthorizedError";
    // Para que el errorMiddleware pueda setear el header si lo desea
    err.wwwAuthenticate = 'Basic realm="example"';
    return next(err);
  }

  console.log("Valid Tokens!");
  next();
};
