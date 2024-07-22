CREATE TABLE IF NOT EXISTS "fintrack_transaction" (
	"transaction_id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"transaction_date" timestamp with time zone NOT NULL,
	"transaction_value" double precision NOT NULL,
	"transaction_type" varchar(255)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fintrack_transaction" ADD CONSTRAINT "fintrack_transaction_user_id_fintrack_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."fintrack_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
