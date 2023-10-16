'use client';

import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type location = 'Select' | 'Access' | 'Whitwell' | 'Jasper';

export default function Page() {
  const [cart, setCart] = useState([]) as any;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [locationState, setLocationState] = useState<location>('Select');
  const router = useRouter();

  const updateQuantity = (orderItemId: any, quantity: number) => {
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
        return data;
      })
      .then(() => {
        fetch('api/cart')
          .then((response) => response.json())
          .then((x) => {
            setCart(x);
          });
      })
      .catch((error) => console.error(error));
  };

  const submitCart = (orderId: string, location: string) => {
    setIsLoading(true);
    return fetch('api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, location }),
    })
      .then((response) => {
        return response.json();
      })
      .then((x) => {
        router.back();
        setTimeout(() => {
          router.push('/status/cartStatus/cartStatusSuccess');
        }, 500);
      })
      .catch((error) => {
        console.error(error);
        router.back();
        setTimeout(() => {
          router.push('/status/cartStatus/cartStatusSuccess');
        }, 500);
        router.push('/status/cartStatus/cartStatusFailed');
      });
  };

  const gotoCartPage = () => {
    router.back();
    setTimeout(() => {
      router.push('/checkout/cart');
    }, 250);
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
        {cart.length > 0 ? <h1 className="text-3xl">Cart: </h1> : ''}
        <div className="flex flex-col-reverse gap-4">
          <div className="h-16"></div>
          {cart.length > 0 && !isLoading ? (
            cart.map((item: any) => {
              //@ts-ignore
              return (
                <div
                  key={`${item.id}`}
                  className="bg-secondary bg-opacity-50 p-4 flex flex-col items-center md:flex-row md:justify-between rounded-2xl shadow-xl"
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
          {cart.length === 0 ? (
            <h2 className="text-3xl">No Items In Cart</h2>
          ) : (
            ''
          )}
        </div>
        <div className="fixed right-9 bottom-0 p-4">
          <button
            className={`btn join-item ${
              cart.length > 0 && !isLoading ? 'btn-primary' : 'btn-disabled'
            }`}
            onClick={() => gotoCartPage()}
          >
            Submit
          </button>
        </div>
        {/* Code below is for internal ordering */}
        {/* <div className="fixed join join-horizontal right-0 bottom-0 p-4">
          <select
            className="select-primary join-item px-4"
            value={locationState}
            onChange={(e) => setLocationState(() => e.target.value as location)}
          >
            <option>Select</option>
            <option value={'access'}>Access</option>
            <option value={'whitwell'}>Whitwell</option>
            <option value={'jasper'}>Jasper</option>
          </select>
          <button
            className={`btn join-item ${
              cart.length > 0 && !isLoading && locationState !== 'Select'
                ? 'btn-primary'
                : 'btn-disabled'
            }`}
            onClick={() => submitCart(cart[0].orderId, locationState)}
          >
            Submit
          </button>
        </div> */}
      </div>
    </Modal>
  );
}
