/*
  Warnings:

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

-- DropTable
DROP TABLE "meals";

-- DropTable
DROP TABLE "movies";

-- DropTable
DROP TABLE "places";
