/*
  Warnings:

  - Added the required column `barres` to the `Format` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuita` to the `Format` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Format` ADD COLUMN `barres` INTEGER NOT NULL,
    ADD COLUMN `cuita` DOUBLE NOT NULL;
