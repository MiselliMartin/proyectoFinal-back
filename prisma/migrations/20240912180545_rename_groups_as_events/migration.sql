/*
  Warnings:

  - You are about to drop the column `groupId` on the `room_decisions` table. All the data in the column will be lost.
  - You are about to drop the `groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_in_group` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[eventId]` on the table `room_decisions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eventId` to the `room_decisions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "room_decisions" DROP CONSTRAINT "room_decisions_groupId_fkey";

-- DropForeignKey
ALTER TABLE "users_in_group" DROP CONSTRAINT "users_in_group_groupId_fkey";

-- DropForeignKey
ALTER TABLE "users_in_group" DROP CONSTRAINT "users_in_group_userId_fkey";

-- DropIndex
DROP INDEX "room_decisions_groupId_key";

-- AlterTable
ALTER TABLE "room_decisions" DROP COLUMN "groupId",
ADD COLUMN     "eventId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "groups";

-- DropTable
DROP TABLE "users_in_group";

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "plannedDate" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_in_event" (
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_in_event_userId_eventId_key" ON "users_in_event"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "room_decisions_eventId_key" ON "room_decisions"("eventId");

-- AddForeignKey
ALTER TABLE "users_in_event" ADD CONSTRAINT "users_in_event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_in_event" ADD CONSTRAINT "users_in_event_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_decisions" ADD CONSTRAINT "room_decisions_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
