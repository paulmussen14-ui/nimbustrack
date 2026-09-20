let tareas = [];

function agregarTarea(texto) {
    const nuevaTarea = { texto, completada: false };
    tareas.push(nuevaTarea);
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
    return tarea;
}

function eliminarTarea(indice) {
    if (indice < 0 || indice >= tareas.length) {
        return false;
    }
    tareas.splice(indice, 1);
    return true;
}


module.exports = { agregarTarea, listarTareas, completarTarea, eliminarTarea };
