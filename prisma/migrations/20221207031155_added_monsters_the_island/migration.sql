/*
  Warnings:

  - Added the required column `islandsId` to the `Monsters` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Monsters" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "hability" INTEGER NOT NULL,
    "life" INTEGER NOT NULL,
    "description" TEXT,
    "loot" TEXT,
    "additional" TEXT,
    "islandsId" TEXT NOT NULL,
    CONSTRAINT "Monsters_islandsId_fkey" FOREIGN KEY ("islandsId") REFERENCES "Islands" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Monsters" ("additional", "description", "hability", "life", "loot", "name") SELECT "additional", "description", "hability", "life", "loot", "name" FROM "Monsters";
DROP TABLE "Monsters";
ALTER TABLE "new_Monsters" RENAME TO "Monsters";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
