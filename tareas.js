const fs = require("fs");
const RUTA_ARCHIVO = "./tareas.json";

let tareas = [];


if (fs.existsSync(RUTA_ARCHIVO)) {
    const contenido = fs.readFileSync(RUTA_ARCHIVO, "utf-8");
    tareas = JSON.parse(contenido);
}


function guardarEnArchivo() {
    const contenido = JSON.stringify(tareas, null, 2);
    fs.writeFileSync(RUTA_ARCHIVO, contenido, "utf-8");
}

function agregarTarea(texto) {
    const nuevaTarea = { texto, completada: false };
    tareas.push(nuevaTarea);
    guardarEnArchivo();
    return nuevaTarea;
}

function listarTareas() {
    return tareas;
}

function completarTarea(indice) {
    const tarea = tareas[indice];
    if (!tarea) {
        return undefined;
    }
    tarea.completada = true;
    guardarEnArchivo();
    return tarea;
}

function eliminarTarea(indice) {
    if (indice < 0 || indice >= tareas.length) {
        return false;
    }
    tareas.splice(indice, 1);
    guardarEnArchivo();
    return true;
}

module.exports = { agregarTarea, listarTareas, completarTarea, eliminarTarea, guardarEnArchivo };
