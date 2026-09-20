let tareas = [];

function agregarTarea(texto) {
    const nuevaTarea = { texto, completada: false };
    tareas.push(nuevaTarea);
    return nuevaTarea;
}

function listarTareas() {
    return tareas;
}


module.exports = { agregarTarea, listarTareas };
