/*
  Warnings:

  - You are about to drop the column `temporadaId` on the `Format` table. All the data in the column will be lost.
  - You are about to drop the `Temporada` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `temporada` to the `Format` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Format` DROP FOREIGN KEY `Format_temporadaId_fkey`;

-- AlterTable
ALTER TABLE `Format` DROP COLUMN `temporadaId`,
    ADD COLUMN `temporada` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Temporada`;
