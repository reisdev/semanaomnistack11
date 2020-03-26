import express from "express";
import dotenv from "dotenv";

// Loading environment variables
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    return res.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Matheus dos Reis de Jesus"
    })
})

app.listen(process.env.port || 8000, () => {
    console.log(`
        Server running on port ${process.env.port || 8000}
        Available on http://localhost:${process.env.port || 8000}
    `)
});