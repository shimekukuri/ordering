import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
import { department } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const submitForm = async (data: FormData) => {
  'use server';
  const id = data.get('id') as string;
  const name = data.get('input-name') as string;
  const description = data.get('input-description') as string;
  const department = data.get('input-department') as department;
  const categoryId = data.get('input-category-id') as string;
  const del = data.get('del') as string;

  console.log(del);

  if (!id || !name || !description || !department || !categoryId) {
    console.log('missing field');
    return;
  }

  if (del) {
    try {
      await prisma.item.delete({ where: { id: id } });
    } catch (e) {
      console.error(e);
      return redirect('./failure');
    }
  } else {
    try {
      await prisma.item.update({
        where: { id: id },
        data: {
          name: name,
          department: department,
          categoryId: categoryId,
          description: description,
        },
      });
    } catch (e) {
      console.error(e);
      return redirect('./failure');
    }
  }

  return redirect('./success');
};

export default async function Page({ params }: { params: { id: string } }) {
  let item = await prisma.item.findFirst({ where: { id: params.id } });

  const permissionCheck = await getUserPermissions([
    'acessnet',
    'createItem',
    'deleteItem',
    'admin',
  ]);

  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
    <div className="flex justify-center items-center flex-1 p-4 w-screen shadow-2xl">
      <form className="card w-96 bg-base-100 shadow-xl" action={submitForm}>
        <figure className="px-10 pt-10">
          <img src={item?.image} alt={item?.name} className="rounded-xl" />
        </figure>
        <input
          className="hidden"
          type="text"
          defaultValue={item?.id}
          name={'id'}
        />
        <div className="card-body items-center text-center">
          <label htmlFor="input-name" className="text-left w-full">
            Product Name:
          </label>
          <input
            id="input-name"
            name="input-name"
            className="input input-primary w-full text-center"
            defaultValue={item?.name}
          />
          <label htmlFor="input-price">Price</label>
          <input
            id="input-price"
            name="input-price"
            className="input input-primary w-full text-center"
            defaultValue={item?.price}
          />
          <label htmlFor="input-description" className="text-left w-full">
            Description:
          </label>
          <textarea
            id="input-description"
            name="input-description"
            className="textarea textarea-secondary w-full"
            defaultValue={item?.description}
          />
          <label htmlFor="input-department" className="text-left w-full">
            Department
          </label>
          <select
            name="input-department"
            id="input-department"
            className="input input-primary w-full text-center"
            defaultValue={item?.department}
          >
            <option defaultValue={item?.department}>{item?.department}</option>
            <option>{department.internalorder}</option>
          </select>
          <label htmlFor="input-category-id" className="text-left w-full">
            Category Id:
          </label>
          <input
            name="input-category-id"
            id="input-category-id"
            className="input input-primary w-full text-center"
            defaultValue={item?.categoryId ?? ''}
          />
          <label htmlFor="del" className="text-left w-full">
            Delete?
          </label>
          <input
            name="del"
            id="del"
            type="checkbox"
            className="checkbox-primary"
          />
          <h2 className="text-left text-2xl w-full">Tags:</h2>
          <div className="flex flex-wrap gap-4">
            {item?.tags.map((x, i) => {
              return (
                <span key={x + i}>
                  <div className="badge badge-secondary p-2 flex justify-between">
                    {x}
                  </div>
                </span>
              );
            })}
          </div>

          <div className="card-actions">
            <button type="submit" className="btn btn-primary">
              Submit Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
