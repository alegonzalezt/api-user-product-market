import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://api-marketplus:Api-market-plus@cluster0.wjn3f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  PORT: process.env.PORT || 4000,
  SECRET: 'products-api'
};
