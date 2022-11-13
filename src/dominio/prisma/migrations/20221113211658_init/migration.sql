-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nombre" TEXT
);

-- CreateTable
CREATE TABLE "Pronostico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizacion" DATETIME NOT NULL,
    "resultado1" INTEGER,
    "resultado2" INTEGER,
    "usuarioId" INTEGER NOT NULL,
    "fechaFixtureId" INTEGER NOT NULL,
    CONSTRAINT "Pronostico_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pronostico_fechaFixtureId_fkey" FOREIGN KEY ("fechaFixtureId") REFERENCES "FechaFixture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FechaFixture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dia" INTEGER NOT NULL,
    "grupo" TEXT NOT NULL,
    "pais1" TEXT NOT NULL,
    "pais2" TEXT NOT NULL,
    "terminado" BOOLEAN NOT NULL DEFAULT false,
    "resultado1" INTEGER,
    "resultado2" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
