import { config } from "dotenv";

config();

export default {
    host:process.env.HOST || "",
    user:process.env.USER || "",
    password:process.env.PASSWORD || "",
    schema:process.env.SCHEMA || "",
    port:process.env.PORT || ""
};
