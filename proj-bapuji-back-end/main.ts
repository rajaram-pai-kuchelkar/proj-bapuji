import { Hono } from '@hono/hono'

import { PrismaClient } from './generated/client/deno/edge.ts'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

const app = new Hono()

app.get("/", async (c)=>{
  const data = await prisma.tmas.findMany({
    orderBy: { dt : 'desc'}
  })
  return c.json(data)
})

Deno.serve({ port: 3000, hostname: "127.0.0.1" }, app.fetch)
