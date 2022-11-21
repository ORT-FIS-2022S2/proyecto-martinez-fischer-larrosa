import Usuario from './usuario.js';

test('Creación de una usuario', () => {
  let unUsuario = new Usuario("Nahuelpan", "info@nahuelpan.com");
  expect(unUsuario.nombre).toBe("Nahuelpan");
  expect(unUsuario.email).toBe("info@nahuelpan.com");
});


test('Creación erronea de un usuario', () => {
  expect(() => { 
    new Usuario("Nahuelpan", "nahuelpan.com"); 
  })
  .toThrow(Error("Email invalido"));
});