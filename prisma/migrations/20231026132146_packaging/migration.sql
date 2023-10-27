/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `Packaging` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Packaging_nom_key` ON `Packaging`(`nom`);
