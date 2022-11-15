import Pronostico from "./pronostico.js";

test("Agregar un pronostico", () => {
  let addPronostico = new Pronostico("1", "1", 3, 1);
  expect(addPronostico.fechaFixtureId).toBe("1");
  expect(addPronostico.usuarioId).toBe("1");
  expect(addPronostico.resultado1).toBe(3);
  expect(addPronostico.resultado2).toBe(1);
});

test("Agregar un pronostico erroneo", () => {
  expect(() => {
    new Pronostico("1", "1", "z", 1);
  }).toThrow(Error("No es un número"));
});
