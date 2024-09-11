/*
  Warnings:

  - The primary key for the `room_decisions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `room_decisions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "room_decisions" DROP CONSTRAINT "room_decisions_pkey",
DROP COLUMN "id";
