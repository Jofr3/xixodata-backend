/*
  Warnings:

  - Added the required column `item` to the `Packaging` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Packaging` ADD COLUMN `item` VARCHAR(191) NOT NULL;
