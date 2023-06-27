'use client';

import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateQuantity = (orderItemId: any, quantity: number) => {
    console.log(orderItemId, quantity);
    setIsLoading(true);
    return fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderItemId: orderItemId,
        quantity: quantity,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        fetch('api/cart')
          .then((response) => response.json())
          .then((x) => {
            setCart(x);
          });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetch('api/cart')
      .then((response) => response.json())
      .then((x) => {
        setCart(x);
      });
  }, []);

  return (
    <Modal>
      <div className="bg-white w-full rounded-2xl shadow-2xl h-[80vh] md:h-[50vh] p-4 overflow-y-scroll relative">
        <h1 className="text-3xl">Cart: </h1>
        <div className="flex flex-col gap-4">
          {cart.length > 0 && !isLoading ? (
            cart.map((item: any) => {
              console.log('this', item);
              //@ts-ignore
              return (
                <div
                  key={`${item.id}`}
                  className="bg-secondary bg-opacity-50 p-4 flex flex-col items-center md:flex-row md:justify-between md:items-start rounded-2xl shadow-xl"
                >
                  <img
                    src={`${item.item.image}`}
                    className="h-16 md:w-auto"
                    alt="product image"
                    loading="lazy"
                  ></img>
                  <h2 className="font-bold text-2xl text-center">{`${item.item.name}`}</h2>

                  <div className="join join-horizontal">
                    <button
                      className="btn join-item"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <div className="btn join-item">{`Quantity: ${item.quantity}`}</div>
                    <button
                      className="btn join-item"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="loading loading-lg loading-ring justify-self-center self-center scale-150"></div>
          )}
        </div>
        <button className="absolute btn btn-primary right-5 bottom-5">
          Submit
        </button>
      </div>
    </Modal>
  );
}
