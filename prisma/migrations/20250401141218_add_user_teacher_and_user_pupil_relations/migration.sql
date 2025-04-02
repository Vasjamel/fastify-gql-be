/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Pupil` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Pupil" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pupilId" TEXT,
ADD COLUMN     "teacherId" TEXT,
ALTER COLUMN "role" SET DEFAULT 'GUEST';

-- CreateIndex
CREATE UNIQUE INDEX "Pupil_userId_key" ON "Pupil"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_userId_key" ON "Teacher"("userId");

-- AddForeignKey
ALTER TABLE "Pupil" ADD CONSTRAINT "Pupil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
