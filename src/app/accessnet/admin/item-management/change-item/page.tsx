import ProductCardChanger from '@/components/productCard/ProductCardChanger';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
import { redirect } from 'next/navigation';

const getItems = async () => {
  return await prisma.item.findMany();
};

export default async function Page() {
  let val = await getUserPermissions([
    'admin',
    'acessnet',
    'createItem',
    'deleteItem',
  ]);
  if (!val) {
    return redirect('/unauthorized');
  }

  const items = await getItems();

  return (
    <main className="flex flex-wrap justify-center items-center p-4 gap-4 w-screen">
      {items.map((x) => {
        return (
          <ProductCardChanger
            id={x.id}
            //@ts-ignore
            categoryId={x.categoryId}
            description={x.description}
            image={x.image}
            name={x.name}
            key={x.id}
          />
        );
      })}
    </main>
  );
}
