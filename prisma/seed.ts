import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    await prisma.user.deleteMany();

    const promises = []

    for (let i = 0; i < 20; i++) {
        promises.push(
            prisma.user.create({
                data: {
                    name: faker.name.fullName(),
                    email: faker.internet.email(),
                    password: faker.internet.password()
                }
            })
        )
    }

    await Promise.all(promises);
}

run()
    .then(async ()  => {
        await prisma.$disconnect();
    })
 