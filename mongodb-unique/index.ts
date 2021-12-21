import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.log.create({
    data: {
      level: "Warn",
      meta: {},
    },
  })
  await prisma.log.create({
    data: {
      level: "Warn",
      meta: {},
    },
  })
}

main().catch(console.error)
