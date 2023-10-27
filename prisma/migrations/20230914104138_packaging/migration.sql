/*
  Warnings:

  - You are about to drop the column `weight` on the `Format` table. All the data in the column will be lost.
  - Added the required column `pes` to the `Format` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Format` DROP COLUMN `weight`,
    ADD COLUMN `pes` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `Packaging` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FormatToPackaging` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FormatToPackaging_AB_unique`(`A`, `B`),
    INDEX `_FormatToPackaging_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FormatToPackaging` ADD CONSTRAINT `_FormatToPackaging_A_fkey` FOREIGN KEY (`A`) REFERENCES `Format`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FormatToPackaging` ADD CONSTRAINT `_FormatToPackaging_B_fkey` FOREIGN KEY (`B`) REFERENCES `Packaging`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
