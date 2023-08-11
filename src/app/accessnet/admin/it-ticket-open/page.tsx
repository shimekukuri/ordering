import LocationCard from '@/components/accessnet/admin/it-ticket-open/location-card/LocationCard';
import { prisma } from '@/ulitiles/prisma/db';
import { ticketType } from '@prisma/client';

const getTicket = async () => {
  const tickets = await prisma.ticket.findMany({
    where: { type: 'IT' },
  });

  let whitwell = [];
  let access = [];
  let jasper = [];
  let cates = [];

  for (let ticket of tickets) {
    switch (ticket.location.toString()) {
      case 'access': {
        access.push(ticket);
        break;
      }
      case 'jasper': {
        jasper.push(ticket);
        break;
      }
      case 'cates': {
        cates.push(ticket);
        break;
      }
      case 'whitwell': {
        whitwell.push(ticket);
        break;
      }
    }
  }

  return [whitwell, access, cates, jasper];
};

export default async function Page() {
  const tickets = await getTicket();

  console.log(tickets);

  return (
    <div className="flex-1 p-4 flex flex-wrap overflow-y-scroll gap-4 snap-y snap-mandatory">
      <div className="grid md:grid-cols-2 md:grid-rows-2 w-full gap-4 h-full snap-center">
        {tickets.map((x) => {
          return <LocationCard key={x[0].location} locationData={x} />;
        })}
      </div>
      <div className="h-full bg-blue-500 w-full snap-center rounded-2xl shadow-2xl"></div>
    </div>
  );
}
