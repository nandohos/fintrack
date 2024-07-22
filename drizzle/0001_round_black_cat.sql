ALTER TABLE "fintrack_account" ADD COLUMN "password" varchar(255);--> statement-breakpoint
ALTER TABLE "fintrack_account" ADD COLUMN "salt" varchar(255);