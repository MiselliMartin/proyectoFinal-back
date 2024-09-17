/*
  Warnings:

  - Added the required column `password` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "password" VARCHAR(15) NOT NULL;
