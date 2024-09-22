-- AlterTable
ALTER TABLE "users_in_event" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_in_event_pkey" PRIMARY KEY ("id");
