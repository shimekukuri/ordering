import { prisma } from '@/ulitiles/prisma/db';

export async function generateStaticParams() {
  let items = await prisma.item.findMany();

  return items.map((x) => ({ id: x.id }));
}

export default async function Page({ params }: any) {
  let { id } = params;
  let item = await prisma.item.findFirst({ where: { id: id } });

  return <div>{item?.name}</div>;
}
