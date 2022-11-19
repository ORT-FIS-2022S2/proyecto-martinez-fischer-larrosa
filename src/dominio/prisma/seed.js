import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fechaFixtureData = [
  //Grupo A
  {
    dia: 1,
    grupo: "A",
    pais1: "Catar",
    pais2: "Ecuador",
    terminado: false,
  },
  {
    dia: 2,
    grupo: "A",
    pais1: "Senegal",
    pais2: "Holanda",
    terminado: false,
  },
  {
    dia: 6,
    grupo: "A",
    pais1: "Catar",
    pais2: "Senegal",
    terminado: false,
  },
  {
    dia: 6,
    grupo: "A",
    pais1: "Holanda",
    pais2: "Ecuador",
    terminado: false,
  },
  {
    dia: 10,
    grupo: "A",
    pais1: "Ecuador",
    pais2: "Senegal",
    terminado: false,
  },
  {
    dia: 10,
    grupo: "A",
    pais1: "Holanda",
    pais2: "Catar",
    terminado: false,
  },
  //Grupo B
  {
    dia: 2,
    grupo: "B",
    pais1: "Inglaterra",
    pais2: "Irán",
    terminado: false,
  },
  {
    dia: 2,
    grupo: "B",
    pais1: "USA",
    pais2: "Gales",
    terminado: false,
  },
  {
    dia: 6,
    grupo: "B",
    pais1: "Gales",
    pais2: "Irán",
    terminado: false,
  },
  {
    dia: 6,
    grupo: "B",
    pais1: "Inglaterra",
    pais2: "USA",
    terminado: false,
  },
  {
    dia: 10,
    grupo: "B",
    pais1: "Gales",
    pais2: "Inglaterra",
    terminado: false,
  },
  {
    dia: 10,
    grupo: "B",
    pais1: "Irán",
    pais2: "USA",
    terminado: false,
  },
  //Grupo C
  {
    dia: 3,
    grupo: "C",
    pais1: "Argentina",
    pais2: "Arabia Saudita",
    terminado: false,
  },
  {
    dia: 3,
    grupo: "C",
    pais1: "México",
    pais2: "Polonia",
    terminado: false,
  },
  {
    dia: 7,
    grupo: "C",
    pais1: "Polonia",
    pais2: "Arabia Saudita",
    terminado: false,
  },
  {
    dia: 7,
    grupo: "C",
    pais1: "Argentina",
    pais2: "México",
    terminado: false,
  },
  {
    dia: 11,
    grupo: "C",
    pais1: "Polonia",
    pais2: "Argentina",
    terminado: false,
  },
  {
    dia: 11,
    grupo: "C",
    pais1: "Arabia Saudita",
    pais2: "México",
    terminado: false,
  },
  //Grupo D
  {
    dia: 3,
    grupo: "D",
    pais1: "Dinamarca",
    pais2: "Túnez",
    terminado: false,
  },
  {
    dia: 3,
    grupo: "D",
    pais1: "Francia",
    pais2: "Australia",
    terminado: false,
  },
  {
    dia: 7,
    grupo: "D",
    pais1: "Túnez",
    pais2: "Australia",
    terminado: false,
  },
  {
    dia: 7,
    grupo: "D",
    pais1: "Francia",
    pais2: "Dinamarca",
    terminado: false,
  },
  {
    dia: 11,
    grupo: "D",
    pais1: "Túnez",
    pais2: "Francia",
    terminado: false,
  },
  {
    dia: 11,
    grupo: "D",
    pais1: "Australia",
    pais2: "Dinamarca",
    terminado: false,
  },
  //Grupo E
  {
    dia: 4,
    grupo: "E",
    pais1: "Alemania",
    pais2: "Japón",
    terminado: false,
  },
  {
    dia: 4,
    grupo: "E",
    pais1: "España",
    pais2: "Costa Rica",
    terminado: false,
  },
  {
    dia: 8,
    grupo: "E",
    pais1: "Japón",
    pais2: "Costa Rica",
    terminado: false,
  },
  {
    dia: 8,
    grupo: "E",
    pais1: "España",
    pais2: "Alemania",
    terminado: false,
  },
  {
    dia: 12,
    grupo: "E",
    pais1: "Costa Rica",
    pais2: "Alemania",
    terminado: false,
  },
  {
    dia: 12,
    grupo: "E",
    pais1: "Japón",
    pais2: "España",
    terminado: false,
  },
  //Grupo F
  {
    dia: 4,
    grupo: "F",
    pais1: "Marruecos",
    pais2: "Croacia",
    terminado: false,
  },
  {
    dia: 4,
    grupo: "F",
    pais1: "Bélgica",
    pais2: "Canadá",
    terminado: false,
  },
  {
    dia: 8,
    grupo: "F",
    pais1: "Bélgica",
    pais2: "Marruecos",
    terminado: false,
  },
  {
    dia: 8,
    grupo: "F",
    pais1: "Croacia",
    pais2: "Canadá",
    terminado: false,
  },
  {
    dia: 12,
    grupo: "F",
    pais1: "Croacia",
    pais2: "Bélgica",
    terminado: false,
  },
  {
    dia: 12,
    grupo: "F",
    pais1: "Canadá",
    pais2: "Marruecos",
    terminado: false,
  },
  //Grupo G
  {
    dia: 5,
    grupo: "G",
    pais1: "Suiza",
    pais2: "Camerún",
    terminado: false,
  },
  {
    dia: 5,
    grupo: "G",
    pais1: "Brasil",
    pais2: "Serbia",
    terminado: false,
  },
  {
    dia: 9,
    grupo: "G",
    pais1: "Camerún",
    pais2: "Serbia",
    terminado: false,
  },
  {
    dia: 9,
    grupo: "G",
    pais1: "Brasil",
    pais2: "Suiza",
    terminado: false,
  },
  {
    dia: 13,
    grupo: "G",
    pais1: "Camerún",
    pais2: "Brasil",
    terminado: false,
  },
  {
    dia: 13,
    grupo: "G",
    pais1: "Serbia",
    pais2: "Suiza",
    terminado: false,
  },
  //Grupo H
  {
    dia: 5,
    grupo: "H",
    pais1: "Uruguay",
    pais2: "Corea",
    terminado: false,
  },
  {
    dia: 5,
    grupo: "H",
    pais1: "Portugal",
    pais2: "Ghana",
    terminado: false,
  },
  {
    dia: 9,
    grupo: "H",
    pais1: "Corea",
    pais2: "Ghana",
    terminado: false,
  },
  {
    dia: 9,
    grupo: "H",
    pais1: "Portugal",
    pais2: "Uruguay",
    terminado: false,
  },
  {
    dia: 13,
    grupo: "H",
    pais1: "Corea",
    pais2: "Portugal",
    terminado: false,
  },
  {
    dia: 13,
    grupo: "H",
    pais1: "Ghana",
    pais2: "Uruguay",
    terminado: false,
  },
];

const usuarioData = [
  {
    nombre: "Alice",
    email: "alice@ort.com",
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
        },
      ],
    },
  },
  {
    nombre: "Nilu",
    email: "nilu@ort.com",
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
        },
      ],
    },
  },
];

async function main() {
  console.log(`Comienzo de seeding ...`);
  for (const f of fechaFixtureData) {
    const fechaFixture = await prisma.fechaFixture.create({
      data: f,
    });
    console.log(`Creado fecha con id: ${fechaFixture.id}`);
  }
  for (const u of usuarioData) {
    const usuario = await prisma.usuario.create({
      data: u,
    });
    console.log(`Creado usuario con id: ${usuario.id}`);
  }
  console.log(`Seeding terminado.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
