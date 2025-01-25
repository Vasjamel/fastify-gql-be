/*
  Warnings:

  - You are about to drop the `LessonPupilRelation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LessonToPupil` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LessonPupilRelation" DROP CONSTRAINT "LessonPupilRelation_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "LessonPupilRelation" DROP CONSTRAINT "LessonPupilRelation_pupilId_fkey";

-- DropForeignKey
ALTER TABLE "_LessonToPupil" DROP CONSTRAINT "_LessonToPupil_A_fkey";

-- DropForeignKey
ALTER TABLE "_LessonToPupil" DROP CONSTRAINT "_LessonToPupil_B_fkey";

-- DropTable
DROP TABLE "LessonPupilRelation";

-- DropTable
DROP TABLE "_LessonToPupil";

-- CreateTable
CREATE TABLE "_PupilLessons" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PupilLessons_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PupilLessons_B_index" ON "_PupilLessons"("B");

-- AddForeignKey
ALTER TABLE "_PupilLessons" ADD CONSTRAINT "_PupilLessons_A_fkey" FOREIGN KEY ("A") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PupilLessons" ADD CONSTRAINT "_PupilLessons_B_fkey" FOREIGN KEY ("B") REFERENCES "Pupil"("id") ON DELETE CASCADE ON UPDATE CASCADE;
