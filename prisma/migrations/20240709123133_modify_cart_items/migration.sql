/*
  Warnings:

  - You are about to drop the column `image` on the `CartItems` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `CartItems` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CartItems" DROP COLUMN "image",
DROP COLUMN "title";
