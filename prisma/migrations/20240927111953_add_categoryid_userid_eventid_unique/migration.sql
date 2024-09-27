/*
  Warnings:

  - A unique constraint covering the columns `[mealId,userId,eventId]` on the table `users_liked_meals` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movieId,userId,eventId]` on the table `users_liked_movies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[placeId,userId,eventId]` on the table `users_liked_places` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_liked_meals_mealId_userId_key";

-- DropIndex
DROP INDEX "users_liked_movies_movieId_userId_key";

-- DropIndex
DROP INDEX "users_liked_places_placeId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "users_liked_meals_mealId_userId_eventId_key" ON "users_liked_meals"("mealId", "userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "users_liked_movies_movieId_userId_eventId_key" ON "users_liked_movies"("movieId", "userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "users_liked_places_placeId_userId_eventId_key" ON "users_liked_places"("placeId", "userId", "eventId");
