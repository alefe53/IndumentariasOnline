import { supabase } from "../database/supabaseClient.js";

const ADMIN_EMAIL = "admin@gmail.com";

const AuthController = {
  register: async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res
      .status(201)
      .json({ message: "Usuario registrado", user: data.user });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    // Hardcodear rol admin
    let userWithRole = { ...data.user };
    if (userWithRole.email === ADMIN_EMAIL) {
      userWithRole.rol = "admin";
    } else {
      userWithRole.rol = "user";
    }

    return res.json({
      message: "Login exitoso",
      token: data.session.access_token,
      user: userWithRole,
    });
  },
};

export default AuthController;
