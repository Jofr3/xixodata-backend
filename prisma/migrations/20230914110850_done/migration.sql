/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nom]` on the table `Packaging` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nom]` on the table `Torro` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `barresXcaixaTallat` to the `Format` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barresXcaixo` to the `Format` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pesXcaixo` to the `Format` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merme` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pes` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pesReal` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `altura` to the `Packaging` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ample` to the `Packaging` table without a default value. This is not possible if the table is not empty.
  - Added the required column `llarg` to the `Packaging` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Format` ADD COLUMN `barresXcaixaTallat` INTEGER NOT NULL,
    ADD COLUMN `barresXcaixo` INTEGER NOT NULL,
    ADD COLUMN `pesXcaixo` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Ingredient` ADD COLUMN `merme` DOUBLE NOT NULL,
    ADD COLUMN `pes` DOUBLE NOT NULL,
    ADD COLUMN `pesReal` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Packaging` ADD COLUMN `altura` DOUBLE NOT NULL,
    ADD COLUMN `ample` DOUBLE NOT NULL,
    ADD COLUMN `llarg` DOUBLE NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Ingredient_nom_key` ON `Ingredient`(`nom`);

-- CreateIndex
CREATE UNIQUE INDEX `Packaging_nom_key` ON `Packaging`(`nom`);

-- CreateIndex
CREATE UNIQUE INDEX `Torro_nom_key` ON `Torro`(`nom`);
