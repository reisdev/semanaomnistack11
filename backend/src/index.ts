import express from "express";
import dotenv from "dotenv";

import routes from "./routes"

// Loading environment variables
dotenv.config();

const app = express();

app.use(express.json());

// Add resources
app.use(routes);

app.listen(process.env.port || 8000, () => {
    console.log(`
        Server running on port ${process.env.port || 8000}
        Available on http://localhost:${process.env.port || 8000}
    `)
});