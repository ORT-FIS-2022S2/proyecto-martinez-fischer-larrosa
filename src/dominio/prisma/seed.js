const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const fechaFixtureData = [
  {
    dia: 1,
    grupo: 'H',
    pais1: 'Uruguay',
    pais2: 'Korea',
    terminado: false
  },
  {
    dia: 5,
    grupo: 'H',
    pais1: 'Portugal',
    pais2: 'Uruguay',
    terminado: false
  },
  {
    dia: 10,
    grupo: 'H',
    pais1: 'Ghana',
    pais2: 'Uruguay',
    terminado: false
  }
]

const usuarioData = [
  {
    nombre: 'Alice',
    email: 'alice@ort.com',
    pronosticos: {
      create: [
        {
          resultado1: 1,
          resultado2: 0,
          fechaFixtureId: 1,
        },
        {
          resultado1: 0,
          resultado2: 1,
          fechaFixtureId: 2,
        },
        {
          resultado1: 3,
          resultado2: 3,
          fechaFixtureId: 3,
        }
      ]
    }
  },
  {
    nombre: 'Nilu',
    email: 'nilu@ort.com',
    pronosticos: {
      create: [
        {
          resultado1: 2,
          resultado2: 3,
          fechaFixtureId: 1,
        },
        {
          resultado1: 4,
          resultado2: 1,
          fechaFixtureId: 2,
        },
        {
          resultado1: 1,
          resultado2: 4,
          fechaFixtureId: 3,
        }
      ]
    }
  }
]

async function main() {
  console.log(`Comienzo de seeding ...`)
  for (const f of fechaFixtureData) {
    const fechaFixture = await prisma.fechaFixture.create({
      data: f,
    })
    console.log(`Creado fecha con id: ${fechaFixture.id}`)
  }
  for (const u of usuarioData) {
    const usuario = await prisma.usuario.create({
      data: u,
    })
    console.log(`Creado usuario con id: ${usuario.id}`)
  }
  console.log(`Seeding terminado.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
