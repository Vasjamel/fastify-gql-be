-- CreateEnum
CREATE TYPE "LessonContentType" AS ENUM ('TEXT', 'VIDEO', 'AUDIO', 'IMAGE', 'PDF', 'LINK');

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "category" TEXT,
ADD COLUMN     "objective" TEXT,
ADD COLUMN     "title" TEXT;

-- CreateTable
CREATE TABLE "LessonContent" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "LessonContentType" NOT NULL DEFAULT 'TEXT',
    "order" INTEGER,
    "value" TEXT,
    "lessonId" TEXT NOT NULL,

    CONSTRAINT "LessonContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LessonContent" ADD CONSTRAINT "LessonContent_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;
