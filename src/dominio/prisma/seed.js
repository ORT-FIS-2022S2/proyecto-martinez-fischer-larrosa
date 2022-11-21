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
    fechaFixtureId: 1
  },
  {
    dia: 2,
    grupo: "A",
    pais1: "Senegal",
    pais2: "Holanda",
    terminado: false,
    fechaFixtureId: 2
  },
  {
    dia: 6,
    grupo: "A",
    pais1: "Catar",
    pais2: "Senegal",
    terminado: false,
    fechaFixtureId: 3
  },
  {
    dia: 6,
    grupo: "A",
    pais1: "Holanda",
    pais2: "Ecuador",
    terminado: false,
    fechaFixtureId: 4
  },
  {
    dia: 10,
    grupo: "A",
    pais1: "Ecuador",
    pais2: "Senegal",
    terminado: false,
    fechaFixtureId: 5
  },
  {
    dia: 10,
    grupo: "A",
    pais1: "Holanda",
    pais2: "Catar",
    terminado: false,
    fechaFixtureId: 6
  },
  //Grupo B
  {
    dia: 2,
    grupo: "B",
    pais1: "Inglaterra",
    pais2: "Irán",
    terminado: false,
    fechaFixtureId: 7
  },
  {
    dia: 2,
    grupo: "B",
    pais1: "USA",
    pais2: "Gales",
    terminado: false,
    fechaFixtureId: 8
  },
  {
    dia: 6,
    grupo: "B",
    pais1: "Gales",
    pais2: "Irán",
    terminado: false,
    fechaFixtureId: 9
  },
  {
    dia: 6,
    grupo: "B",
    pais1: "Inglaterra",
    pais2: "USA",
    terminado: false,
    fechaFixtureId: 10
  },
  {
    dia: 10,
    grupo: "B",
    pais1: "Gales",
    pais2: "Inglaterra",
    terminado: false,
    fechaFixtureId: 11
  },
  {
    dia: 10,
    grupo: "B",
    pais1: "Irán",
    pais2: "USA",
    terminado: false,
    fechaFixtureId: 12
  },
  //Grupo C
  {
    dia: 3,
    grupo: "C",
    pais1: "Argentina",
    pais2: "Arabia Saudita",
    terminado: false,
    fechaFixtureId: 13
  },
  {
    dia: 3,
    grupo: "C",
    pais1: "México",
    pais2: "Polonia",
    terminado: false,
    fechaFixtureId: 14
  },
  {
    dia: 7,
    grupo: "C",
    pais1: "Polonia",
    pais2: "Arabia Saudita",
    terminado: false,
    fechaFixtureId: 15
  },
  {
    dia: 7,
    grupo: "C",
    pais1: "Argentina",
    pais2: "México",
    terminado: false,
    fechaFixtureId: 16
  },
  {
    dia: 11,
    grupo: "C",
    pais1: "Polonia",
    pais2: "Argentina",
    terminado: false,
    fechaFixtureId: 17
  },
  {
    dia: 11,
    grupo: "C",
    pais1: "Arabia Saudita",
    pais2: "México",
    terminado: false,
    fechaFixtureId: 18
  },
  //Grupo D
  {
    dia: 3,
    grupo: "D",
    pais1: "Dinamarca",
    pais2: "Túnez",
    terminado: false,
    fechaFixtureId: 19
  },
  {
    dia: 3,
    grupo: "D",
    pais1: "Francia",
    pais2: "Australia",
    terminado: false,
    fechaFixtureId: 20
  },
  {
    dia: 7,
    grupo: "D",
    pais1: "Túnez",
    pais2: "Australia",
    terminado: false,
    fechaFixtureId: 21
  },
  {
    dia: 7,
    grupo: "D",
    pais1: "Francia",
    pais2: "Dinamarca",
    terminado: false,
    fechaFixtureId: 22
  },
  {
    dia: 11,
    grupo: "D",
    pais1: "Túnez",
    pais2: "Francia",
    terminado: false,
    fechaFixtureId: 23
  },
  {
    dia: 11,
    grupo: "D",
    pais1: "Australia",
    pais2: "Dinamarca",
    terminado: false,
    fechaFixtureId: 24
  },
  //Grupo E
  {
    dia: 4,
    grupo: "E",
    pais1: "Alemania",
    pais2: "Japón",
    terminado: false,
    fechaFixtureId: 25
  },
  {
    dia: 4,
    grupo: "E",
    pais1: "España",
    pais2: "Costa Rica",
    terminado: false,
    fechaFixtureId: 26
  },
  {
    dia: 8,
    grupo: "E",
    pais1: "Japón",
    pais2: "Costa Rica",
    terminado: false,
    fechaFixtureId: 27
  },
  {
    dia: 8,
    grupo: "E",
    pais1: "España",
    pais2: "Alemania",
    terminado: false,
    fechaFixtureId: 28
  },
  {
    dia: 12,
    grupo: "E",
    pais1: "Costa Rica",
    pais2: "Alemania",
    terminado: false,
    fechaFixtureId: 29
  },
  {
    dia: 12,
    grupo: "E",
    pais1: "Japón",
    pais2: "España",
    terminado: false,
    fechaFixtureId: 30
  },
  //Grupo F
  {
    dia: 4,
    grupo: "F",
    pais1: "Marruecos",
    pais2: "Croacia",
    terminado: false,
    fechaFixtureId: 31
  },
  {
    dia: 4,
    grupo: "F",
    pais1: "Bélgica",
    pais2: "Canadá",
    terminado: false,
    fechaFixtureId: 32
  },
  {
    dia: 8,
    grupo: "F",
    pais1: "Bélgica",
    pais2: "Marruecos",
    terminado: false,
    fechaFixtureId: 33
  },
  {
    dia: 8,
    grupo: "F",
    pais1: "Croacia",
    pais2: "Canadá",
    terminado: false,
    fechaFixtureId: 34
  },
  {
    dia: 12,
    grupo: "F",
    pais1: "Croacia",
    pais2: "Bélgica",
    terminado: false,
    fechaFixtureId: 35
  },
  {
    dia: 12,
    grupo: "F",
    pais1: "Canadá",
    pais2: "Marruecos",
    terminado: false,
    fechaFixtureId: 36
  },
  //Grupo G
  {
    dia: 5,
    grupo: "G",
    pais1: "Suiza",
    pais2: "Camerún",
    terminado: false,
    fechaFixtureId: 37
  },
  {
    dia: 5,
    grupo: "G",
    pais1: "Brasil",
    pais2: "Serbia",
    terminado: false,
    fechaFixtureId: 38
  },
  {
    dia: 9,
    grupo: "G",
    pais1: "Camerún",
    pais2: "Serbia",
    terminado: false,
    fechaFixtureId: 39
  },
  {
    dia: 9,
    grupo: "G",
    pais1: "Brasil",
    pais2: "Suiza",
    terminado: false,
    fechaFixtureId: 40
  },
  {
    dia: 13,
    grupo: "G",
    pais1: "Camerún",
    pais2: "Brasil",
    terminado: false,
    fechaFixtureId: 41
  },
  {
    dia: 13,
    grupo: "G",
    pais1: "Serbia",
    pais2: "Suiza",
    terminado: false,
    fechaFixtureId: 42
  },
  //Grupo H
  {
    dia: 5,
    grupo: "H",
    pais1: "Uruguay",
    pais2: "Corea",
    terminado: false,
    fechaFixtureId: 43
  },
  {
    dia: 5,
    grupo: "H",
    pais1: "Portugal",
    pais2: "Ghana",
    terminado: false,
    fechaFixtureId: 44
  },
  {
    dia: 9,
    grupo: "H",
    pais1: "Corea",
    pais2: "Ghana",
    terminado: false,
    fechaFixtureId: 45
  },
  {
    dia: 9,
    grupo: "H",
    pais1: "Portugal",
    pais2: "Uruguay",
    terminado: false,
    fechaFixtureId: 46
  },
  {
    dia: 13,
    grupo: "H",
    pais1: "Corea",
    pais2: "Portugal",
    terminado: false,
    fechaFixtureId: 47
  },
  {
    dia: 13,
    grupo: "H",
    pais1: "Ghana",
    pais2: "Uruguay",
    terminado: false,
    fechaFixtureId: 48
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
