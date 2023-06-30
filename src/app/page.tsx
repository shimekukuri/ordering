import ProductCard from '@/components/productCard/ProductCard';
import { prisma } from '@/ulitiles/prisma/db';
import Link from 'next/link';

const getItems = () => {
  return prisma.item.findMany();
};

export default async function Home() {
  const items = await getItems();

  return (
    <>
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
      <div className="join join-vertical lg:join-horizontal fixed bottom-0 w-full justify-center p-4">
        <Link href={'cartSearch/drinks'} className="btn join-item">
          Drinks
        </Link>
        <button className="btn join-item">Button</button>
        <button className="btn join-item">Button</button>
      </div>
    </>
  );
}
