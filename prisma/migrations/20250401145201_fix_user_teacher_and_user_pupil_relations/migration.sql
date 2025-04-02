/*
  Warnings:

  - You are about to drop the column `pupilId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "pupilId",
DROP COLUMN "teacherId";
