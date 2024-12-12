import prisma from '../../../../prisma/prisma'
import bcrypt from 'bcryptjs'

// POST /api/users
export async function POST(request: Request) {
    const data = await request.json()
    const hashPassword = await bcrypt.hash(data.password, 10)
    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashPassword,
        },
    })

    return new Response(JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
    })
}

// GET /api/users
export async function GET() {
    const users = await prisma.user.findMany()

    return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" },
    })
}

