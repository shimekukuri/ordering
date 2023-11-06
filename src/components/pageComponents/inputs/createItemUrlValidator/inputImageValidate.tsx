'use client';

import { useEffect, useState } from 'react';

export default function InputUrlValidator({ name }: { name: string }) {
  const [inputValue, setInputValue] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [once, setOnce] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue === undefined) {
        return;
      }
      setOnce(true);
      setLoading(true);
      setValidated(false);

      fetch(inputValue, { method: 'HEAD' })
        .then((res) => {
          if (typeof res === null) {
            return;
          }
          //@ts-ignore
          if (res?.headers?.get('Content-Type').startsWith('image')) {
            setValidated(true);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <>
      <input
        name={name}
        placeholder="Image Url"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
        type="url"
        className={`input input-bordered w-full max-w-xs shadow-xl ${
          loading ? 'input-disabled' : validated ? 'input-info' : 'input-error'
        }`}
      />
      {!once ? (
        ''
      ) : validated ? (
        <div className="text-success">Valid Image Url!</div>
      ) : (
        <div className="text-error">Invalid Image Url</div>
      )}
    </>
  );
}
