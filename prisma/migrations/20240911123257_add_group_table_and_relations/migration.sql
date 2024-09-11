-- AlterTable
ALTER TABLE "meals" ADD COLUMN     "urlImage" VARCHAR(255);

-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "urlImage" VARCHAR(255);

-- AlterTable
ALTER TABLE "places" ADD COLUMN     "urlImage" VARCHAR(255);

-- CreateTable
CREATE TABLE "groups" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "plannedDate" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_in_group" (
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_in_group_userId_groupId_key" ON "users_in_group"("userId", "groupId");

-- AddForeignKey
ALTER TABLE "users_in_group" ADD CONSTRAINT "users_in_group_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_in_group" ADD CONSTRAINT "users_in_group_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
