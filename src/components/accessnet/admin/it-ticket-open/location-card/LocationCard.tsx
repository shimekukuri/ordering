import { Ticket } from '@prisma/client';
import Link from 'next/link';

export default function LocationCard({
  locationData,
}: {
  locationData: Ticket[];
}) {
  return (
    <div className="bg-accent h-full rounded-2xl shadow-2xl flex flex-col p-4 glass justify-around">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">{`${locationData[0].location
          .toString()[0]
          .toUpperCase()}${locationData[0].location.toString().slice(1)}`}</h2>
        <Link
          href={`/accessnet/admin/it-ticket-open/location/${locationData[0].location}`}
        >
          <button className="btn btn-info">See More</button>
        </Link>
      </div>
      <div className="divider mt-0 mb-0"></div>
      <div className="flex flex-row justify-center">
        <div className="text-2xl text-left w-full">
          New: {locationData.filter((x) => x.status === 'new').length}
        </div>
      </div>
      <div className="hidden md:block flex-1 bg-secondary bg-opacity-50 p-2 rounded-2xl">
        {locationData.map((x) => {
          return (
            <div className="" key={x.id}>
              {x.subject}
            </div>
          );
        })}
      </div>
    </div>
  );
}
