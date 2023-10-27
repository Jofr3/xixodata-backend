/*
  Warnings:

  - Added the required column `mermeCuita` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pesCuita` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pesRealCuita` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ingredient` ADD COLUMN `mermeCuita` DOUBLE NOT NULL,
    ADD COLUMN `pesCuita` DOUBLE NOT NULL,
    ADD COLUMN `pesRealCuita` DOUBLE NOT NULL;
