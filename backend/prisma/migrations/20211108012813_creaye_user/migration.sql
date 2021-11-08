/*
  Warnings:

  - You are about to alter the column `favorite` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("bit")` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL
);
INSERT INTO "new_users" ("avatar_url", "favorite", "github_id", "id", "login", "name") SELECT "avatar_url", "favorite", "github_id", "id", "login", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
