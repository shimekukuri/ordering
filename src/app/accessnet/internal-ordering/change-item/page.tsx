import ProductCardChanger from '@/components/productCard/ProductCardChanger';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
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
      <main className="flex flex-wrap justify-center items-center p-4 gap-4">
        {items.map(({ name, description, image, id, categoryId }) => (
          <ProductCardChanger
            key={id}
            id={id}
            name={name}
            description={description}
            image={image}
            categoryId={categoryId!}
          />
        ))}
      </main>
    </>
  );
}
