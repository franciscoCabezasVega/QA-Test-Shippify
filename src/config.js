import { config } from "dotenv";

config();

export default {
    host:process.env.HOST || "",
    user:process.env.USERDB || "",
    password:process.env.PASSWORD || "",
    schema:process.env.SCHEMA || "",
    port:process.env.PORT || ""
};
