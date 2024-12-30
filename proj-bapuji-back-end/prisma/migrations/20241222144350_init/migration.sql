-- CreateTable
CREATE TABLE "tmas" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "link" VARCHAR(300) NOT NULL,
    "type" VARCHAR(30) NOT NULL,

    CONSTRAINT "tmas_pkey" PRIMARY KEY ("id")
);
