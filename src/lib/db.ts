import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

//previous instance

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// const db = globalForPrisma.prisma || prisma;

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// export default db;
