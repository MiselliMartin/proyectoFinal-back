-- CreateTable
CREATE TABLE "room_decisions" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "movieId" INTEGER,
    "mealId" INTEGER,
    "placeId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "room_decisions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "room_decisions_groupId_key" ON "room_decisions"("groupId");

-- AddForeignKey
ALTER TABLE "room_decisions" ADD CONSTRAINT "room_decisions_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_decisions" ADD CONSTRAINT "room_decisions_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_decisions" ADD CONSTRAINT "room_decisions_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_decisions" ADD CONSTRAINT "room_decisions_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;
