'use client';
import { useEffect } from 'react';

export default function CartCount({ cartItems }: { cartItems: any }) {
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <span className="badge badge-sm indicator-item">
      {cartItems.reduce((t: number, c: any) => {
        return (t += c.quantity);
      }, 0)}
    </span>
  );
}
