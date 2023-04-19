import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()
export const GET = async (req : NextRequest) => {
    const soal = await prisma.soal.findMany()
    return NextResponse.json({soal})
    }
    
