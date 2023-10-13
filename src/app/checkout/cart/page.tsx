import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import Breadcrumbs from '@/components/utility/breadcumbs/BreadCrumbs';
import { prisma } from '@/ulitiles/prisma/db';
import currency from 'currency.js';
import { getServerSession } from 'next-auth';
import { Key } from 'react';

const lessQuantity = async () => {};

export default async function Page() {
  const session = await getServerSession(OPTIONS);
  const cart = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: {
      accounts: {
        include: {
          Order: {
            include: {
              items: {
                include: {
                  item: { include: { OrderItem: {} } },
                },
              },
            },
            where: { submited: false },
          },
        },
      },
    },
  });
  console.log('Cart:\n', cart?.accounts[0].Order[0].items);
  const order = cart?.accounts[0].Order[0];

  if (!order) {
    return (
      <div className="p-4 flex-1 flex items-center justify-center text-center flex-col">
        <div className="card w-96 bg-neutral text-neutral-content opacity-0 animate-fade-in-800">
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title">Cart Empty</h2>
            <p>Would you like to to go shopping? </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Take me shopping!</button>
              <button className="btn btn-ghost">Home</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {order?.items.map((x, i) => {
          return (
            <CartCard
              id={x.item.id}
              name={x.item.name}
              price={x.item.price}
              key={x.item.id}
              quantity={x.quantity.toString()}
              item_image={x.item.image}
              description={x.item.description}
            />
          );
        })}
      </div>
    </>
  );
}

const CartCard = ({
  name,
  price,
  key,
  quantity,
  item_image,
  description,
  id,
}: {
  name: string;
  price: string;
  key: Key;
  quantity: string;
  item_image: string;
  description: string;
  id: string;
}) => {
  const total = () => {
    let _quantity = Number.parseFloat(quantity);
    let _price_whole = price.substring(0, price.length - 2);
    let _price_cents = `.${price.substring(-2, price.length)}`;
    let meep = Number.parseFloat(_price_whole + _price_cents);
    let meep2 = _quantity * meep;
    console.log(meep2);
    let meep3 = meep2.toString().split('.');
    console.log(meep3[1]);
    if (`${meep3[1]}`.length < 2) {
      return meep2.toString() + '0';
    }

    return meep2.toString();
  };

  let _price = () => {
    let _price_whole = price.substring(0, price.length - 2);
    let _price_cents = `.${price.slice(-2)}`;
    console.log('price in cents', _price_cents);
    return _price_whole.toString() + _price_cents.toString();
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl relative">
      <div className="absolute top-0 right-0 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FAA0A0"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 shadow-2xl rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <figure className="px-10 pt-10 ">
        <img src={item_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="">
          <p>Quantity: {quantity}</p>
          <p>Price: {_price()}</p>
          <p>{total()}</p>
        </div>
        <div className="card-actions flex-1 items-end">
          <div className="join join-horizontal">
            <button
              className="btn join-item"
              // onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <div className="btn join-item">{`Quantity: ${quantity}`}</div>
            <button
              className="btn join-item"
              // onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
