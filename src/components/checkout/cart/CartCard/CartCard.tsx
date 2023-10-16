import { Key } from 'react';
import QuantityButton from '../QuantityButton/QuantityButton';

export default function CartCard({
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
}) {
  const total = () => {
    let _quantity = Number.parseFloat(quantity);
    let _price_whole = price.substring(0, price.length - 2);
    let _price_cents = `.${price.substring(-2, price.length)}`;
    let meep = Number.parseFloat(_price_whole + _price_cents);
    let meep2 = _quantity * meep;
    let meep3 = meep2.toString().split('.');
    if (`${meep3[1]}`.length < 2) {
      return meep2.toString() + '0';
    }

    return meep2.toString();
  };

  let _price = () => {
    let _price_whole = price.substring(0, price.length - 2);
    let _price_cents = `.${price.slice(-2)}`;
    return _price_whole.toString() + _price_cents.toString();
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl relative">
      <div className="absolute top-0 right-0 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:scale-125"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
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
          <QuantityButton id={id} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}
