import { Prisma } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

// buatkan method get untuk ambild data dari database
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    // return hellow word
    res.status(200).json({ message: "Hello World" })
    }
