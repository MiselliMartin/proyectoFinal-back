/*
  Warnings:

  - A unique constraint covering the columns `[mealId,userId,eventId]` on the table `users_disliked_meals` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movieId,userId,eventId]` on the table `users_disliked_movies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[placeId,userId,eventId]` on the table `users_disliked_places` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_disliked_meals_mealId_userId_key";

-- DropIndex
DROP INDEX "users_disliked_movies_movieId_userId_key";

-- DropIndex
DROP INDEX "users_disliked_places_placeId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "users_disliked_meals_mealId_userId_eventId_key" ON "users_disliked_meals"("mealId", "userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "users_disliked_movies_movieId_userId_eventId_key" ON "users_disliked_movies"("movieId", "userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "users_disliked_places_placeId_userId_eventId_key" ON "users_disliked_places"("placeId", "userId", "eventId");
