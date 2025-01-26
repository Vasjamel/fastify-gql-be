/*
  Warnings:

  - Made the column `name` on table `Pupil` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_pupilId_fkey";

-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "teacherId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pupil" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "lessonId" DROP NOT NULL,
ALTER COLUMN "pupilId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_pupilId_fkey" FOREIGN KEY ("pupilId") REFERENCES "Pupil"("id") ON DELETE SET NULL ON UPDATE CASCADE;
