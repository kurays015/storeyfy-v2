-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoriesToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriesToProduct_AB_unique" ON "_CategoriesToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriesToProduct_B_index" ON "_CategoriesToProduct"("B");

-- AddForeignKey
ALTER TABLE "_CategoriesToProduct" ADD CONSTRAINT "_CategoriesToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriesToProduct" ADD CONSTRAINT "_CategoriesToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
