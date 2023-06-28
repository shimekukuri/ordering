import ProductCard from '@/components/productCard/ProductCard';
import { prisma } from '@/ulitiles/prisma/db';

const getItems = () => {
  return prisma.item.findMany();
};

export default async function Home() {
  const items = await getItems();

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
