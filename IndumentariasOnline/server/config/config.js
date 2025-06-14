// Mis-Esencias/config/config.js
import path from "node:path";
import { fileURLToPath } from "node:url";

const __configFilename = fileURLToPath(import.meta.url);
const __configDirname = path.dirname(__configFilename);

const serverSettings = {
  PORT: process.env.PORT || 3001,
  HOST: process.env.HOST || "127.0.0.1",
};

const dbDirectory = path.resolve(__configDirname, "..", "src", "db");

const pathSettings = {
  PROJECT_ROOT: path.resolve(__configDirname, ".."),
  SRC: path.resolve(__configDirname, "..", "src"),
  VIEWS: path.resolve(__configDirname, "..", "src", "views"),
  ROUTES: path.resolve(__configDirname, "..", "src", "routes"),
  CONTROLLERS: path.resolve(__configDirname, "..", "src", "controllers"),
  MODELS: path.resolve(__configDirname, "..", "src", "models"),
  REPOSITORIES: path.resolve(__configDirname, "..", "src", "repository"),
  PUBLIC: path.resolve(__configDirname, "..", "public"),
  CONFIG_FILENAME: __configFilename,
  CONFIG_DIRNAME: __configDirname,
  SUPABASE_URL:
    process.env.SUPABASE_URL || "https://lxqwnhqyornyvavatrsl.supabase.co",
  SUPABASE_KEY:
    process.env.SUPABASE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cXduaHF5b3JueXZhdmF0cnNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Nzg4NDU3NSwiZXhwIjoyMDYzNDYwNTc1fQ.ZjoX0qMzlek-2aQ6nu5hqCW0jFu3yLTAy-BSw7sA9Js",
  BASIC_USER: process.env.BASIC_USER || "juan",
  BASIC_PASS: process.env.BASIC_PASS || "juan123",
  // MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  // MYSQL_USER: process.env.MYSQL_USER,
  // MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
};

export const config = {
  server: serverSettings,
  paths: pathSettings,
};
