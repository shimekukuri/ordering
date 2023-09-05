import ProductCard from '@/components/productCard/ProductCard';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const getItems = async () => {
  return await prisma.item.findMany({ where: { department: 'internalorder' } });
};

export default async function Home() {
  const permissionCheck = await getUserPermissions(['acessnet']);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  const items = await getItems();

  return (
    <>
      <main className="flex flex-wrap justify-center items-center p-4 gap-4 w-screen">
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
      <div className="join join-horizontal fixed bottom-0 w-full justify-center p-4">
        <Link href={'./shop/drinks'} className="btn join-item">
          Drinks
        </Link>
        <Link href={'./shop/specialty'} className="btn join-item">
          Special
        </Link>
        <Link href={'/Search'} className="btn join-item bg-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Link>
        <Link href={'./shop/snacks'} className="btn join-item">
          Snacks
        </Link>
        <Link href={'./shop/other'} className="btn join-item">
          Other
        </Link>
      </div>
    </>
  );
}
