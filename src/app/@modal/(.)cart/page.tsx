'use client';

import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('api/cart')
      .then((response) => response.json())
      .then((x) => {
        setCart(x);
      });
  }, []);

  return (
    <Modal>
      <div className="bg-white w-full rounded-2xl shadow-2xl h-[80vh] md:h-[50vh] p-4 overflow-y-scroll">
        <h1 className="text-3xl">Cart: </h1>
        <div className="flex flex-col gap-4">
          {cart.length > 0 ? (
            cart.map((item) => {
              //@ts-ignore
              console.log(item);
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
                  <h2>{`Quantity: ${item.quantity}`}</h2>
                </div>
              );
            })
          ) : (
            <>
              <div className="bg-secondary bg-opacity-50 p-4 flex flex-col items-center md:flex-row md:justify-between md:items-start rounded-2xl shadow-xl">
                <div className="h-16 w-16 bg-slate-200 rounded-xl shadow-xl">{` `}</div>
                <div className="bg-slate-200"></div>
                <div className="bg-slate-200"></div>
              </div>
              <div className="bg-secondary bg-opacity-50 p-4 flex flex-col items-center md:flex-row md:justify-between md:items-start rounded-2xl shadow-xl">
                <div className="h-16 w-16 bg-slate-200 rounded-xl shadow-xl">{` `}</div>
                <div className="bg-slate-200"></div>
                <div className="bg-slate-200"></div>
              </div>
              <div className="bg-secondary bg-opacity-50 p-4 flex flex-col items-center md:flex-row md:justify-between md:items-start rounded-2xl shadow-xl">
                <div className="h-16 w-16 bg-slate-200 rounded-xl shadow-xl">{` `}</div>
                <div className="bg-slate-200"></div>
                <div className="bg-slate-200"></div>
              </div>
              <div className="bg-secondary bg-opacity-50 p-4 flex flex-col items-center md:flex-row md:justify-between md:items-start rounded-2xl shadow-xl">
                <div className="h-16 w-16 bg-slate-200 rounded-xl shadow-xl">{` `}</div>
                <div className="bg-slate-200"></div>
                <div className="bg-slate-200"></div>
              </div>
              <div className="bg-secondary bg-opacity-50 p-4 flex flex-col items-center md:flex-row md:justify-between md:items-start rounded-2xl shadow-xl">
                <div className="h-16 w-16 bg-slate-200 rounded-xl shadow-xl">{` `}</div>
                <div className="bg-slate-200"></div>
                <div className="bg-slate-200"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
