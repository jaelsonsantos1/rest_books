import prisma from '../../../../../../prisma/prisma'

// PUT /api/users/[ID]/active
export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
) {
    await prisma.user.update({
        where: {
            id: params.id,
        },
        data: {
            isActive: true,
        },
    })

    return new Response(null, {
        status: 204,
    })
}