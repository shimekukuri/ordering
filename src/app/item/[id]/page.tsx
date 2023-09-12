import { prisma } from '@/ulitiles/prisma/db';

export default async function Page({ params }: { params: { id: string } }) {
  const item = await prisma.item.findUnique({ where: { id: params.id } });

  return (
    <div>
      <div>{item?.id}</div>
      <div>{item?.name}</div>
      <div>{item?.image}</div>
      <div>{item?.description}</div>
      <div>{!item?.department ? item?.department : ''}</div>
      <div>{item?.tags}</div>
    </div>
  );
}

export async function generateStaticParams() {
  let params = await prisma.item.findMany();

  return params.map((item) => ({ id: item.id }));
}
