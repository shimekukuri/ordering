'use client';
import Modal from '@/components/modal/Modal';
import { Item } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState<
    string | number | readonly string[] | undefined
  >('');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, SetSearchResults] = useState<Item[]>();

  const onDismiss = useCallback(() => {
    setLoading(false);
    router.back();
  }, [router]);

  useEffect(() => {
    if (searchVal === undefined || searchVal === '') {
      return;
    }
    setLoading(true);

    const timer = setTimeout(() => {
      fetch('api/find-items/departments/dme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tags: searchVal.toString().split(' '),
        }),
      })
        .then((res) => res.json())
        .then((x) => {
          if (x === undefined) {
            setLoading(false);
            return;
          } else {
            SetSearchResults(x.items);
            setLoading(false);
          }
        });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVal]);

  return (
    <Modal>
      <div className="h-[75dvh] w-full flex flex-col rounded-2xl border-base-300 border p-4 glass bg-primary-content justify-between shadow-inner gap-4">
        <input
          className="input input-primary"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          autoFocus
        />
        {loading ? (
          <div className="loading-spinner loading self-center w-1/2"></div>
        ) : searchResults === undefined || searchResults.length === 0 ? (
          <div className="w-full text-center text-2xl">No Result</div>
        ) : (
          <div className="flex-1 max-h-full overflow-y-scroll rounded-2xl shadow-2xl bg-opacity-50 bg-white p-2">
            <div className="p-2 flex flex-col gap-2">
              {searchResults.map((x) => {
                return (
                  <div
                    key={x.id}
                    className="w-full flex-col-reverse h-32 lg:flex-row lg:h-16 flex items-center justify-between border rounded-lg px-2 shadow-md"
                  >
                    <div>{x.name}</div>
                    <div>{x.description}</div>
                    <div className="flex-1 md:flex-[0]">image</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            className="btn btn-circle bg-warning shadow-2xl"
            onClick={() => onDismiss()}
          >
            {' '}
            X{' '}
          </button>
        </div>
      </div>
    </Modal>
  );
}
