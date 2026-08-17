// Database client - Prisma client for Kerala AI Learning Helper
// Currently using static data for development. Switch to Prisma with a real database for production.
//
// For production with PostgreSQL:
// 1. Set DATABASE_URL in .env
// 2. Change prisma/schema.prisma provider to "postgresql"
// 3. Run: npx prisma db push
// 4. Uncomment the PrismaClient code below

// import { PrismaClient } from "@/generated/prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
//   });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;

export {};
