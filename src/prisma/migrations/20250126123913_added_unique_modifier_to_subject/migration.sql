/*
  Warnings:

  - A unique constraint covering the columns `[subject]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lesson_subject_key" ON "Lesson"("subject");
