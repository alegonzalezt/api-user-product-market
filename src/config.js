import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/apimarketplus",
  PORT: process.env.PORT || 4000,
  SECRET: 'products-api'
};
