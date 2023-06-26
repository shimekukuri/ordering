'use client';

import Modal from '@/components/modal/Modal';
import { useEffect, useState } from 'react';

export default function Page() {
  const [cart, setCart] = useState([{}]);

  useEffect(() => {
    fetch('api/cart')
      .then((response) => response.json())
      .then((x) => {
        console.log(x);
        setCart(x);
      });
  }, []);

  return (
    <Modal>
      <div className="bg-white w-full rounded-2xl shadow-2xl h-[80vh] md:h-[50vh] p-4">
        <div>This is the cart page</div>
        <div className="bg-slate-400 bg-opacity-50">
          {cart
            ? cart.map((item) => {
                //@ts-ignore

                return <div key={item.id}>{item.id}</div>;
              })
            : ''}
        </div>
      </div>
    </Modal>
  );
}
