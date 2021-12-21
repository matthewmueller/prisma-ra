import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
  // await prisma.user.createMany({})
  // await prisma.user.delete({
  //   where: {
  //     id: "1",
  //   },
  // })
  // const users = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // })
  // console.dir(users, { depth: Infinity })

  // await prisma.post.createMany({
  //   data: [
  //     {
  //       id: "1",
  //       userId: "1",
  //       title: "one",
  //     },
  //     {
  //       id: "2",
  //       userId: "1",
  //       title: "two",
  //     },
  //     {
  //       id: "3",
  //       userId: "1",
  //       title: "three",
  //     },
  //   ],
  // })
  await prisma.user.create({
    data: {
      name: "Bob",
    },
  })
}

main()
  .catch((err) => console.error(err))
  .finally(() => prisma.$disconnect())
