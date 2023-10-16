'use client';

import { UpdateCartSuccess } from '@/app/api/update-cart/route';
import { useState } from 'react';

export default function QuantityButton({
  quantity,
  id,
}: {
  quantity: string;
  id: string;
}) {
  const [_quantity, setQuantity] = useState<number>(Number.parseInt(quantity));
  const [loading, setLoading] = useState<boolean>(false);

  const updateQuantity = (orderItemId: string, quantity: number) => {
    setLoading(() => true);
    console.log('THIS', orderItemId);
    return fetch('/api/update-cart', {
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
        if (!response.status) {
          throw 'Problem resolving API';
        }
        return response.json();
      })
      .then((data: UpdateCartSuccess) => {
        setQuantity(() => data.message.quantity);
        setLoading(() => false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(() => false);
      });
  };

  return (
    <div className="join join-horizontal">
      <button
        className={`btn join-item ${loading ? 'disabled' : ''}`}
        onClick={() => updateQuantity(id, _quantity - 1)}
      >
        -
      </button>
      <div className="btn join-item">
        {loading ? (
          <div className="loading loading-spinner"></div>
        ) : (
          `Quantity: ${_quantity}`
        )}
      </div>
      <button
        className={`btn join-item ${loading ? 'disabled' : ''}`}
        onClick={() => updateQuantity(id, _quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
