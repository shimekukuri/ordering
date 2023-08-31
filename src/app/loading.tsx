export default function Loading() {
  return (
    <div className="flex-1 max-h-screen flex items-center justify-center">
      <div className="w-1/2 flex">
        <div className="flex-1 loading loading-infinity"></div>
      </div>
    </div>
  );
}
