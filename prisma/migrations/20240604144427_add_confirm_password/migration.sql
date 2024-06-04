-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "discount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmPassword" TEXT;
