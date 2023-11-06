import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

interface ProductCardInterface {
  name: string;
  image: string;
  description: string;
  categoryId: string;
  id: string;
}

export default async function ProductCardChanger({
  name,
  image,
  description,
  categoryId,
  id,
}: ProductCardInterface) {
  const session = await getServerSession(OPTIONS);

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4 relative">
      {/* <div className=" absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50"></div> */}
      <figure>
        <img src={image} alt="Shoes" className="h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-secondary">{categoryId}</div>
          <Link href={`./change-item/${id}`}>
            <input
              className="hidden"
              type={'text'}
              name="id"
              defaultValue={id}
            />
            <button
              type="submit"
              className={`btn ${
                session ? 'btn-primary' : 'btn-disabled'
              } active:animate-none focus:animate-cart-confirm-200`}
            >
              Change
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
