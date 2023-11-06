import { RefObject } from 'react';

export default function NewsCard({
  id,
  reference,
}: {
  id: string;
  reference: RefObject<HTMLDivElement>;
}) {
  return (
    <div
      id={id}
      className={`min-w-[100vw] text-center newscard$`}
      ref={reference}
    >
      test {id}
    </div>
  );
}
