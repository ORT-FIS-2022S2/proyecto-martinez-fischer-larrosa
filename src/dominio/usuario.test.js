import Usuario from './usuario.js';

test('Creación de una usuario', () => {
  let unUsuario = new Usuario("Nahuelpan", "hola");
  expect(unUsuario.Name).toBe("Nahuelpan");
  expect(unUsuario.email).toBe("Mundo");
});