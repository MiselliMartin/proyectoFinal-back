/*
  Warnings:

  - You are about to drop the column `age` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `room_decisions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `birthDate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "room_decisions" DROP CONSTRAINT "room_decisions_eventId_fkey";

-- DropForeignKey
ALTER TABLE "room_decisions" DROP CONSTRAINT "room_decisions_mealId_fkey";

-- DropForeignKey
ALTER TABLE "room_decisions" DROP CONSTRAINT "room_decisions_movieId_fkey";

-- DropForeignKey
ALTER TABLE "room_decisions" DROP CONSTRAINT "room_decisions_placeId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "age",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- DropTable
DROP TABLE "room_decisions";

-- CreateTable
CREATE TABLE "event_decisions" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "movieId" INTEGER,
    "mealId" INTEGER,
    "placeId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_decisions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "event_decisions" ADD CONSTRAINT "event_decisions_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_decisions" ADD CONSTRAINT "event_decisions_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_decisions" ADD CONSTRAINT "event_decisions_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_decisions" ADD CONSTRAINT "event_decisions_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;
