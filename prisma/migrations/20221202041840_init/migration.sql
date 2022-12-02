-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "warning" TEXT,
    "additional" TEXT
);

-- CreateTable
CREATE TABLE "Monsters" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "hability" INTEGER NOT NULL,
    "life" INTEGER NOT NULL,
    "description" TEXT,
    "loot" TEXT,
    "additional" TEXT
);

-- CreateTable
CREATE TABLE "Islands" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "warning" TEXT,
    "additional" TEXT
);
