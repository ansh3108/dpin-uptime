import { PrismaClient } from "../generated/prisma/client";

// @ts-ignore - Bypassing a known type glitch so the tutorial works!
export const prismaClient = new PrismaClient();