export default function Loading() {
  return (
    <div className="flex items-center justify-center absolute right-0 left-0 top-0 bottom-0 bg-white opacity-50 z-20">
      <div className="w-1/2 flex">
        <div className="flex-1 loading loading-infinity"></div>
      </div>
    </div>
  );
}
