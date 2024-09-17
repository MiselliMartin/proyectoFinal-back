-- CreateTable
CREATE TABLE "users_disliked_movies" (
    "movieId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users_disliked_meals" (
    "mealId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users_disliked_places" (
    "placeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_disliked_movies_movieId_userId_key" ON "users_disliked_movies"("movieId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_disliked_meals_mealId_userId_key" ON "users_disliked_meals"("mealId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_disliked_places_placeId_userId_key" ON "users_disliked_places"("placeId", "userId");

-- AddForeignKey
ALTER TABLE "users_disliked_movies" ADD CONSTRAINT "users_disliked_movies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_movies" ADD CONSTRAINT "users_disliked_movies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_meals" ADD CONSTRAINT "users_disliked_meals_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_meals" ADD CONSTRAINT "users_disliked_meals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_places" ADD CONSTRAINT "users_disliked_places_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_places" ADD CONSTRAINT "users_disliked_places_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
