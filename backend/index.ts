const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Matheus dos Reis de Jesus"
    })
})

app.listen(process.env.port || 8000, () => {
    console.log(`
        Servidor disponível em http://localhost:${process.env.port || 8000}
    `)
});