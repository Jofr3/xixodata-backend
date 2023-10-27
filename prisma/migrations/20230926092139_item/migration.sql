/*
  Warnings:

  - You are about to drop the `_FormatToTorro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_FormatToTorro` DROP FOREIGN KEY `_FormatToTorro_A_fkey`;

-- DropForeignKey
ALTER TABLE `_FormatToTorro` DROP FOREIGN KEY `_FormatToTorro_B_fkey`;

-- DropTable
DROP TABLE `_FormatToTorro`;

-- CreateTable
CREATE TABLE `Temporada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `any` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barres` INTEGER NOT NULL,
    `temporadaId` INTEGER NULL,
    `torroId` INTEGER NOT NULL,
    `formatId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_temporadaId_fkey` FOREIGN KEY (`temporadaId`) REFERENCES `Temporada`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_torroId_fkey` FOREIGN KEY (`torroId`) REFERENCES `Torro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_formatId_fkey` FOREIGN KEY (`formatId`) REFERENCES `Format`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
