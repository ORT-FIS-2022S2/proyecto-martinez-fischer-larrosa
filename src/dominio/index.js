const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/registro`, async (req, res) => {
  const { nombre, email } = req.body


  const result = await prisma.usuario.create({
    data: {
      nombre,
      email
    },
  })
  res.json(result)
})

app.post(`/pronostico`, async (req, res) => {
  const { fechaFixtureId, usuarioId, resultado1, resultado2 } = req.body
  const result = await prisma.pronostico.create({
    data: {
      resultado1,
      resultado2,
      usuarioId,
      fechaFixtureId,
    },
  })
  res.json(result)
})


app.delete(`/pronostico/:id`, async (req, res) => {
  const { id } = req.params
  const pronostico = await prisma.pronostico.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany()
  res.json(usuarios)
})

app.get('/usuario/:id/pronosticos', async (req, res) => {
  const { id } = req.params

  const pronosticosUsuario = await prisma.usuario
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .pronosticos()

  res.json(pronosticosUsuario)
})

app.get(`/pronostico/:id`, async (req, res) => {
  const { id } = req.params

  const pronostico = await prisma.pronostico.findUnique({
    where: { id: Number(id) },
  })
  res.json(pronostico)
})

app.get('/fixture', async (req, res) => {
  const { dia, grupo} = req.query //TODO: Falta filtrar!

  const fechaFixtures = await prisma.fechaFixture.findMany()
  res.json(fechaFixtures)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Servidor listo en: http://localhost:3000
⭐️ Ver ejemplo de requests: https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/tree/main/src/dominio/README.md`),
)
