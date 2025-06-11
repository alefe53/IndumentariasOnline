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
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
};

export const config = {
  server: serverSettings,
  paths: pathSettings,
};
