// import { PrismaClient, Prisma } from "./generated/prisma/index";

import { PrismaClient, Prisma } from "./generated/prisma";

const prisma = new PrismaClient();

const globalForPrisma = globalThis as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma, Prisma };
