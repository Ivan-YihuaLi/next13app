import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: {
      email: 'admin@neighborgood.com',
    },
    update: {},
    create: {
      email: 'admin@neighborgood.com',
      user_name: 'admin',
      email_verification: new Date(),
      image: '',
      type: 'ADMIN',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
