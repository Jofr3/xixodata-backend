-- CreateTable
CREATE TABLE `Format` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weight` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FormatToTorro` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FormatToTorro_AB_unique`(`A`, `B`),
    INDEX `_FormatToTorro_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FormatToTorro` ADD CONSTRAINT `_FormatToTorro_A_fkey` FOREIGN KEY (`A`) REFERENCES `Format`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FormatToTorro` ADD CONSTRAINT `_FormatToTorro_B_fkey` FOREIGN KEY (`B`) REFERENCES `Torro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
