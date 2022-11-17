import express from "express";
import { PrismaClient } from "@prisma/client";
import Usuario from "./usuario.js";
import Pronostico from "./pronostico.js";
import Partido from "./partido.js";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

//Registrar un Usuario.
app.post(`/registro`, async (req, res) => {
  const { nombre, email } = req.body;
  const u = new Usuario(nombre, email);

  const result = await prisma.usuario.create({
    data: {
      nombre: u.nombre,
      email: u.email,
    },
  });
  res.json(result);
});

//Pronosticar un Partido.
app.post(`/pronostico`, async (req, res) => {
  const { fechaFixtureId, usuarioId, resultado1, resultado2 } = req.body;
  const p = new Pronostico(fechaFixtureId, usuarioId, resultado1, resultado2);

  const result = await prisma.pronostico.create({
    data: {
      fechaFixtureId: p.fechaFixtureId,
      usuarioId: p.usuarioId,
      resultado1: p.resultado1,
      resultado2: p.resultado2,
    },
  });
  res.json(result);
});

app.delete(`/pronostico/:id`, async (req, res) => {
  const { id } = req.params;
  const pronostico = await prisma.pronostico.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(post);
});

// Obtener Lista de Usuarios.
app.get("/usuarios", async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  const result = [];
  for (let index = 0; index < usuarios.length; index++) {
    const u = new Usuario(usuarios[index].nombre, usuarios[index].email);
    result.push(u);
  }
  res.json(result);
});

// Obtener Pronosticos de un Usuario.
app.get("/usuario/:id/pronosticos", async (req, res) => {
  const { id } = req.params;
  const pronosticosUsuario = await prisma.usuario
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .pronosticos();
  const result = [];
  for (let index = 0; index < pronosticosUsuario.length; index++) {
    const p = new Pronostico(
      pronosticosUsuario[index].fechaFixtureId,
      pronosticosUsuario[index].usuarioId,
      pronosticosUsuario[index].resultado1,
      pronosticosUsuario[index].resultado2
    );
    result.push(p);
  }

  res.json(result);
});

// Obtener Pronosticos de una fecha.
app.get(`/pronostico/:id`, async (req, res) => {
  const { id } = req.params;

  const pronosticos = await prisma.pronostico.findMany({
    where: { fechaFixtureId: Number(id) },
  });
  const result = [];
  for (let index = 0; index < pronosticos.length; index++) {
    const p = new Pronostico(
      pronosticos[index].fechaFixtureId,
      pronosticos[index].usuarioId,
      pronosticos[index].resultado1,
      pronosticos[index].resultado2
    );
    result.push(p);
  }

  res.json(result);
});

//Obtener fixture por Dia o por Grupo.
app.get("/fixture", async (req, res) => {
  const { dia, grupo } = req.query;
  const result = [];
  if (dia) {
    const fixtureDia = await prisma.fechaFixture.findMany({
      where: { dia: Number(dia) },
    });
    for (let index = 0; index < array.length; index++) {
      const p = new Partido(
        fixtureDia[index].id,
        fixtureDia[index].dia,
        fixtureDia[index].grupo,
        fixtureDia[index].pais1,
        fixtureDia[index].pais2,
        fixtureDia[index].terminado,
        fixtureDia[index].resultado1,
        fixtureDia[index].resultado2
      );
      result.push(p);
    }
    res.json(result);
  } else if (grupo) {
    const fixtureGrupo = await prisma.fechaFixture.findMany({
      where: { grupo: grupo },
    });
    for (let index = 0; index < array.length; index++) {
      const p = new Partido(
        fixtureGrupo[index].id,
        fixtureGrupo[index].dia,
        fixtureGrupo[index].grupo,
        fixtureGrupo[index].pais1,
        fixtureGrupo[index].pais2,
        fixtureGrupo[index].terminado,
        fixtureGrupo[index].resultado1,
        fixtureGrupo[index].resultado2
      );
      result.push(p);
    }
    res.json(result);
  }else {
    res.json(result);
  }
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Servidor listo en: http://localhost:3000
⭐️ Ver ejemplo de requests: https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/tree/main/src/dominio/README.md`)
);
