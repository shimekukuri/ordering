import { prisma } from '@/ulitiles/prisma/db';
import InputUrlValidator from '@/components/pageComponents/inputs/createItemUrlValidator/inputImageValidate';
import { redirect, useRouter } from 'next/navigation';

async function getCategories() {
  const categories = await prisma.category.findMany();

  return categories.map((category) => {
    return { category: category.name };
  });
}

export default async function Page() {
  const createItem = async (data: FormData) => {
    'use server';
    const productName = data.get('productName');
    const cateogry = data.get('category');
    const url = data.get('url');
    const description = data.get('description');

    if (!productName || !cateogry || !url || !description) {
      return;
    }

    console.log(productName, cateogry, url, description);

    await fetch(url as string, { method: 'HEAD' }).then(async (res) => {
      if (typeof res === null) {
        return;
      }
      //@ts-ignore
      if (res?.headers?.get('Content-Type').startsWith('image')) {
        //put main logic here
        try {
          const createItemStatus = await prisma.item.create({
            data: {
              description: description as string,
              categoryId: cateogry as string,
              name: productName as string,
              image: url as string,
            },
          });
          redirect('./success');
        } catch (err) {
          console.error(err);
          redirect('./failure');
        }
      } else {
        //put failer logic here
        redirect('./failure');
      }
    });
  };

  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <form
        className="h-full w-full lg:w-2/3 lg:h-2/3 flex flex-col justify-center items-center gap-4"
        action={createItem}
      >
        <h1 className="text-3xl">Create New Item</h1>
        <div className="divider"></div>
        <input
          required
          type="text"
          placeholder="Product Name"
          name="productName"
          className="input input-bordered input-primary w-full max-w-xs shadow-xl"
        />
        <input
          required
          type="text"
          placeholder="Description"
          name="description"
          className="input input-bordered input-accent w-full max-w-xs shadow-xl"
        />
        <select
          className="select select-secondary w-full max-w-xs shadow-xl"
          name="category"
        >
          <option disabled selected>
            Please Select a Category
          </option>
          {categories.map((x) => (
            <option key={x.category}>{x.category}</option>
          ))}
        </select>
        <InputUrlValidator name={'url'} />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
