import {describe, it, expect} from "vitest";
import {agregarTarea, listarTareas} from"./tareas";

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
});