import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
  await prisma.user.create({
    data: {
      name: "Bob",
    },
  })
}

main()
  .catch((err) => console.error(err))
  .finally(() => prisma.$disconnect())
