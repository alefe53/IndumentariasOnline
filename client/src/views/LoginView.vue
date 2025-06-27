<template>
  <div class="form-container">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Contraseña:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Ingresar</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="loginSuccess" class="alert-success">
      ¡Bienvenido/a, {{ loginEmail }}!
    </div>
  </div>
</template>

<script>
import { auth } from "../auth";
import { useAuthUser } from "../useAuthUser";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loginSuccess: false,
      loginEmail: "",
    };
  },
  methods: {
    async login() {
      this.error = "";
      try {
        const response = await fetch("http://localhost:3001/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error || "Error desconocido");

        auth.login(data.token, data.user);
        // ACTUALIZA EL USUARIO GLOBAL REACTIVO
        const { user } = useAuthUser();
        user.value = data.user;

        this.loginSuccess = true;
        this.loginEmail = data.user.email;
        setTimeout(() => {
          this.loginSuccess = false;
        }, 3000);
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 420px;
  margin: 80px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Lato", sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
  color: #2a2a2a;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 12px 0 6px;
  color: #444;
  font-weight: 600;
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: 0.2s;
}

input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px #4a90e250;
}

button {
  margin-top: 20px;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #357dc0;
}

.error,
.success {
  margin-top: 16px;
  text-align: center;
  font-weight: bold;
}

.error {
  color: red;
}

.success {
  color: #28a745;
}

.alert-success {
  margin-top: 20px;
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
