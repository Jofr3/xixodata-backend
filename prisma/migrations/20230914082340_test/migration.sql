/*
  Warnings:

  - You are about to drop the `IngredientsOnTorro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `IngredientsOnTorro` DROP FOREIGN KEY `IngredientsOnTorro_ingredientId_fkey`;

-- DropForeignKey
ALTER TABLE `IngredientsOnTorro` DROP FOREIGN KEY `IngredientsOnTorro_torroId_fkey`;

-- DropTable
DROP TABLE `IngredientsOnTorro`;

-- CreateTable
CREATE TABLE `_IngredientToTorro` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_IngredientToTorro_AB_unique`(`A`, `B`),
    INDEX `_IngredientToTorro_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_IngredientToTorro` ADD CONSTRAINT `_IngredientToTorro_A_fkey` FOREIGN KEY (`A`) REFERENCES `Ingredient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_IngredientToTorro` ADD CONSTRAINT `_IngredientToTorro_B_fkey` FOREIGN KEY (`B`) REFERENCES `Torro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
