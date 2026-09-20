import {describe, it, expect} from "vitest";
import {agregarTarea, listarTareas, eliminarTarea, completarTarea} from"./tareas";

describe("modulo de tareas", () => {
    it("agregarTarea debe agregar una tarea al array", () => {
        const tarea = agregarTarea("Aprender Vitest");
        expect(tarea.texto).toBe("Aprender Vitest");
        expect(tarea.completada).toBe(false);
    });

    it("listarTareas debe retornar un array", () => {
        const resultado = listarTareas();
        expect(Array.isArray(resultado)).toBe(true);
    });

    it("completarTarea debe marcar una tarea como completada", () => {
        agregarTarea("Aprender Testing");
        const tareaCompletada = completarTarea(0);
        expect(tareaCompletada.completada).toBe(true);
    });

    it("eliminarTarea debe eliminar una tarea del array", () => {
        agregarTarea("Aprender Node.js");
        const cantidadAntes = listarTareas().length;
        eliminarTarea(0);
        const cantidadDespues = listarTareas().length;
        expect(cantidadDespues).toBe(cantidadAntes - 1);
    });
});