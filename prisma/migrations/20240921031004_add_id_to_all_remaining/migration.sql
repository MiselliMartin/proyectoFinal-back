/*
  Warnings:

  - You are about to drop the column `userId` on the `events` table. All the data in the column will be lost.
  - You are about to drop the `meals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `places` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "event_decisions" DROP CONSTRAINT "event_decisions_mealId_fkey";

-- DropForeignKey
ALTER TABLE "event_decisions" DROP CONSTRAINT "event_decisions_movieId_fkey";

-- DropForeignKey
ALTER TABLE "event_decisions" DROP CONSTRAINT "event_decisions_placeId_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_userId_fkey";

-- DropForeignKey
ALTER TABLE "users_disliked_meals" DROP CONSTRAINT "users_disliked_meals_mealId_fkey";

-- DropForeignKey
ALTER TABLE "users_disliked_movies" DROP CONSTRAINT "users_disliked_movies_movieId_fkey";

-- DropForeignKey
ALTER TABLE "users_disliked_places" DROP CONSTRAINT "users_disliked_places_placeId_fkey";

-- DropForeignKey
ALTER TABLE "users_liked_meals" DROP CONSTRAINT "users_liked_meals_mealId_fkey";

-- DropForeignKey
ALTER TABLE "users_liked_movies" DROP CONSTRAINT "users_liked_movies_movieId_fkey";

-- DropForeignKey
ALTER TABLE "users_liked_places" DROP CONSTRAINT "users_liked_places_placeId_fkey";

-- DropIndex
DROP INDEX "events_userId_key";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "users_disliked_meals" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_disliked_meals_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users_disliked_movies" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_disliked_movies_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users_disliked_places" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_disliked_places_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users_liked_meals" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_liked_meals_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users_liked_movies" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_liked_movies_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users_liked_places" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_liked_places_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "meals";

-- DropTable
DROP TABLE "movies";

-- DropTable
DROP TABLE "places";
