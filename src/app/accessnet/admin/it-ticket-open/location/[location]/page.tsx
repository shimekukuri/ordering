import CaseCard from '@/components/accessnet/admin/it-ticket-open/CaseCard.tsx/CaseCard';
import { prisma } from '@/ulitiles/prisma/db';
import { locations } from '@prisma/client';

const getLocationTickets = async (location: locations) => {
  const data = await prisma.ticket.findMany({
    where: { location: location, type: 'IT' },
  });

  return data;
};

export default async function page({
  params: { location },
}: {
  params: { location: locations };
}) {
  let locationData = await getLocationTickets(location);

  let newTicket = [];
  let inProgress = [];
  let completed = [];

  for (let x of locationData) {
    switch (x.status) {
      case 'new': {
        newTicket.push(x);
        break;
      }
      case 'inProgress': {
        inProgress.push(x);
        break;
      }
      case 'completed': {
        completed.push(x);
        break;
      }
    }
  }

  return (
    <>
      <div className="flex-1 p-4 flex flex-wrap gap-4 w-screen">
        <div className="h-full w-full flex flex-col p-4 rounded-2xl shadow-2xl glass bg-blue-400">
          <div className="card-title">New Tickets for {location}:</div>
          <div className="flex-1 overflow-y-scroll p-2 bg-slate-100 bg-opacity-20 rounded-2xl shadow-2xl flex gap-4 flex-col">
            {newTicket.map((x) => {
              return <CaseCard key={x.id} ticket={x} />;
            })}
          </div>
        </div>
        <div className="h-full w-full flex flex-col p-4 rounded-2xl shadow-2xl glass bg-amber-400">
          <div className="card-title">In Progress for {location}:</div>
          <div className="flex-1 overflow-y-scroll p-2 bg-slate-100 bg-opacity-20 rounded-2xl shadow-2xl flex gap-4 flex-col">
            {inProgress.map((x) => {
              return <CaseCard key={x.id} ticket={x} />;
            })}
          </div>
        </div>
        <div className="h-full w-full flex flex-col p-4 rounded-2xl shadow-2xl glass bg-green-400">
          <div className="card-title">Completed Tickets for {location}:</div>
          <div className="flex-1 overflow-y-scroll p-2 bg-slate-100 bg-opacity-20 rounded-2xl shadow-2xl flex gap-4 flex-col">
            {completed.map((x) => {
              return <CaseCard key={x.id} ticket={x} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
