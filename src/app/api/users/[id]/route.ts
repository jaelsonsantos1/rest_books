import prisma from '../../../../../prisma/prisma'

// POST /api/users/[ID]
export async function GET(request: Request, 
    { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id,
        },
    })

    if (!user) {
        return new Response(null, {
            status: 404,
        })
    }

    return new Response(JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
    })
}

// PUT /api/users
export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
) {
    await prisma.user.update({
        where: {
            id: params.id,
        },
        data: {
            isActive: false,
        },
    })

    return new Response(null, {
        status: 204,
    })
}

