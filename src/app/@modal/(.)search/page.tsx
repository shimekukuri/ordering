'use client';
import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState<
    string | number | readonly string[] | undefined
  >('');
  const [timeoutBounce, setTimeoutBounce] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {}, [searchVal]);

  return (
    <Modal>
      <div className="h-[75dvh] w-full flex flex-col rounded-2xl border-base-300 border p-4 glass bg-secondary-focus justify-between shadow-inner gap-4">
        <input
          className="input input-primary"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="flex-1 max-h-full overflow-y-scroll rounded-2xl shadow-2xl bg-opacity-50 bg-white p-2">
            <div className="p-2 flex flex-col gap-2">
              {[...Array(40)].map((_, i) => {
                return (
                  <div
                    key={i}
                    className="w-full flex-col-reverse h-32 lg:flex-row lg:h-16 flex items-center justify-between border rounded-lg px-2 shadow-md"
                  >
                    <div>Description</div>
                    <div>Product</div>
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
