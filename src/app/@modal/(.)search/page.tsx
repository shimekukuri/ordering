'use client';
import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <Modal>
      <div className="h-[75dvh] w-full flex flex-col rounded-2xl border-primary border p-4 bg-secondary-focus bg-opacity-50 justify-between ">
        <input className="input input-primary" />
        <div className="flex-1"></div>
        <div className="flex justify-center">
          <button className="btn btn-circle"> X </button>
        </div>
      </div>
    </Modal>
  );
}
