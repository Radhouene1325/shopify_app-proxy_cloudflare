import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// const prisma = (DATABASE_URL?: string) =>
//   new PrismaClient({
//     datasourceUrl: DATABASE_URL,
//   }).$extends(withAccelerate());




  const prisma = new PrismaClient({
    datasources: {
      db:process.env.DATABASE_URL, // <- directUrl for Prisma 7
    },
  }).$extends(withAccelerate());

export default prisma;
