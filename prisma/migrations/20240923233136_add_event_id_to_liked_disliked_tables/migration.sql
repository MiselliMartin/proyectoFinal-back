/*
  Warnings:

  - Added the required column `eventId` to the `users_disliked_meals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `users_disliked_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `users_disliked_places` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `users_liked_meals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `users_liked_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `users_liked_places` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users_disliked_meals" ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users_disliked_movies" ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users_disliked_places" ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users_liked_meals" ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users_liked_movies" ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users_liked_places" ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users_liked_movies" ADD CONSTRAINT "users_liked_movies_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_liked_meals" ADD CONSTRAINT "users_liked_meals_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_liked_places" ADD CONSTRAINT "users_liked_places_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_movies" ADD CONSTRAINT "users_disliked_movies_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_meals" ADD CONSTRAINT "users_disliked_meals_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_disliked_places" ADD CONSTRAINT "users_disliked_places_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
