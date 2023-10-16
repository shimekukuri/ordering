import LocationCard from '@/components/accessnet/admin/it-ticket-open/location-card/LocationCard';
import Breadcrumbs from '@/components/utility/breadcumbs/BreadCrumbs';
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
  let uniformShop = [];

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
      case 'uniformshop': {
        uniformShop.push(ticket);
        break;
      }
    }
  }

  return {
    pharmacies: [whitwell, access, cates, jasper],
    other: [uniformShop],
  };
};

export default async function Page() {
  const tickets = await getTicket();

  return (
    <>
      <Breadcrumbs />
      <div className="flex-1 p-4 flex flex-wrap overflow-y-scroll gap-4 ">
        <div className="grid md:grid-cols-2 md:grid-rows-2 w-full gap-4 h-full">
          {tickets.pharmacies.map((x) => {
            return <LocationCard key={x[0].location} locationData={x} />;
          })}
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-2 w-full gap-4 h-full">
          {tickets.other.map((x) => {
            return <LocationCard key={x[0].location} locationData={x} />;
          })}
        </div>
      </div>
    </>
  );
}
