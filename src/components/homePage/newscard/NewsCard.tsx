export default function NewsCard({ id }: { id: string }) {
  return (
    <div id={id} className="min-w-[100vw] snap-center text-center">
      test {id}
    </div>
  );
}
