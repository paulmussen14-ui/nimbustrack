const express = require("express");
const { agregarTarea, listarTareas} = require("./tareas");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ mensaje: "NimbusTrack API funcionando correctamente" });
});

app.get("/tareas", (req, res) => {
    res.json(listarTareas());
});

app.post("/tareas", (req, res) => {
    const texto = req.body.texto;
    const nuevaTarea = agregarTarea(texto);
    res.json(nuevaTarea);
});

app.listen(PORT, () => {
    console.log(`NimbusTrack backend running on port ${PORT}`);
})
