/*
  Warnings:

  - You are about to drop the column `barresXcaixaTallat` on the `Format` table. All the data in the column will be lost.
  - You are about to drop the column `pes` on the `Format` table. All the data in the column will be lost.
  - You are about to drop the column `pesXcaixo` on the `Format` table. All the data in the column will be lost.
  - You are about to drop the column `mermeCuita` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `pes` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `pesCuita` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `pesReal` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `pesRealCuita` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `altura` on the `Packaging` table. All the data in the column will be lost.
  - You are about to drop the column `ample` on the `Packaging` table. All the data in the column will be lost.
  - You are about to drop the column `llarg` on the `Packaging` table. All the data in the column will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Torro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IngredientToTorro` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `barresXcaixa` to the `Format` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gramsXcaixo` to the `Format` table without a default value. This is not possible if the table is not empty.
  - Added the required column `torro` to the `Format` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantitat` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `X` to the `Packaging` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Y` to the `Packaging` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Z` to the `Packaging` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_formatId_fkey`;

-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_temporadaId_fkey`;

-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_torroId_fkey`;

-- DropForeignKey
ALTER TABLE `_IngredientToTorro` DROP FOREIGN KEY `_IngredientToTorro_A_fkey`;

-- DropForeignKey
ALTER TABLE `_IngredientToTorro` DROP FOREIGN KEY `_IngredientToTorro_B_fkey`;

-- DropIndex
DROP INDEX `Ingredient_nom_key` ON `Ingredient`;

-- DropIndex
DROP INDEX `Packaging_nom_key` ON `Packaging`;

-- AlterTable
ALTER TABLE `Format` DROP COLUMN `barresXcaixaTallat`,
    DROP COLUMN `pes`,
    DROP COLUMN `pesXcaixo`,
    ADD COLUMN `barresXcaixa` INTEGER NOT NULL,
    ADD COLUMN `gramsXcaixo` INTEGER NOT NULL,
    ADD COLUMN `temporadaId` INTEGER NULL,
    ADD COLUMN `torro` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Ingredient` DROP COLUMN `mermeCuita`,
    DROP COLUMN `pes`,
    DROP COLUMN `pesCuita`,
    DROP COLUMN `pesReal`,
    DROP COLUMN `pesRealCuita`,
    ADD COLUMN `formatId` INTEGER NULL,
    ADD COLUMN `quantitat` INTEGER NOT NULL,
    MODIFY `merme` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Packaging` DROP COLUMN `altura`,
    DROP COLUMN `ample`,
    DROP COLUMN `llarg`,
    ADD COLUMN `X` INTEGER NOT NULL,
    ADD COLUMN `Y` INTEGER NOT NULL,
    ADD COLUMN `Z` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Item`;

-- DropTable
DROP TABLE `Torro`;

-- DropTable
DROP TABLE `_IngredientToTorro`;

-- AddForeignKey
ALTER TABLE `Format` ADD CONSTRAINT `Format_temporadaId_fkey` FOREIGN KEY (`temporadaId`) REFERENCES `Temporada`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingredient` ADD CONSTRAINT `Ingredient_formatId_fkey` FOREIGN KEY (`formatId`) REFERENCES `Format`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
