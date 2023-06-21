import { prisma } from "@/ulitiles/prisma/db";

interface ProductCardInterface {
  name: string;
  image: string;
  description: string;
  categoryId: string;
}

const addToCart = async () => {
  'use server'

  const cart = prisma.order.
}

export default function ProductCard({
  name,
  image,
  description,
  categoryId,
}: ProductCardInterface) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4">
      <figure>
        <img src={image} alt="Shoes" className="h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-secondary">{categoryId}</div>
          <form>
            <button className="btn btn-primary">Add To Cart</button>
          </form>
        </div>
      </div>
    </div>
  );
}
