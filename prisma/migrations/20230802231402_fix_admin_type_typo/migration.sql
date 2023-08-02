/*
  Warnings:

  - The values [AMDIN] on the enum `userType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "userType_new" AS ENUM ('USER', 'ADMIN', 'EDITOR');
ALTER TABLE "User" ALTER COLUMN "type" TYPE "userType_new" USING ("type"::text::"userType_new");
ALTER TYPE "userType" RENAME TO "userType_old";
ALTER TYPE "userType_new" RENAME TO "userType";
DROP TYPE "userType_old";
COMMIT;
