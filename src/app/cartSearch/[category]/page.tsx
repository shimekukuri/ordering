import ProductCard from '@/components/productCard/ProductCard';
import { prisma } from '@/ulitiles/prisma/db';

export async function generateStaticParams() {
  const categories = await prisma.category.findMany();

  return categories.map((category) => {
    return { category: category.name };
  });
}

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const items = await prisma.item.findMany({
    where: { Category: { name: category } },
  });

  return (
    <main className="flex flex-wrap justify-center items-center p-4 gap-4">
      {items.map(({ name, description, image, id, categoryId }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          description={description}
          image={image}
          categoryId={categoryId!}
        />
      ))}
    </main>
  );
}
