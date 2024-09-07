/*
  Warnings:

  - You are about to drop the column `details` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the `users_favorite_routines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users_favorite_routines" DROP CONSTRAINT "users_favorite_routines_movieId_fkey";

-- DropForeignKey
ALTER TABLE "users_favorite_routines" DROP CONSTRAINT "users_favorite_routines_userId_fkey";

-- AlterTable
ALTER TABLE "movies" DROP COLUMN "details";

-- DropTable
DROP TABLE "users_favorite_routines";

-- CreateTable
CREATE TABLE "meals" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(80) NOT NULL,
    "location" TEXT,
    "rating" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_liked_movies" (
    "movieId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users_liked_meals" (
    "mealId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users_liked_places" (
    "placeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_liked_movies_movieId_userId_key" ON "users_liked_movies"("movieId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_liked_meals_mealId_userId_key" ON "users_liked_meals"("mealId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_liked_places_placeId_userId_key" ON "users_liked_places"("placeId", "userId");

-- AddForeignKey
ALTER TABLE "users_liked_movies" ADD CONSTRAINT "users_liked_movies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_liked_movies" ADD CONSTRAINT "users_liked_movies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_liked_meals" ADD CONSTRAINT "users_liked_meals_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_liked_meals" ADD CONSTRAINT "users_liked_meals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_liked_places" ADD CONSTRAINT "users_liked_places_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_liked_places" ADD CONSTRAINT "users_liked_places_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
