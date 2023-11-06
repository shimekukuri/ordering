import { Ticket } from '@prisma/client';
import Link from 'next/link';

export default function CaseCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="flex flex-col md:flex-row bg-secondary bg-opacity-40 rounded-2xl shadow-2xl p-2">
      <div className="flex-1 justify-between items-center hidden lg:flex">
        <div>Case ID:</div>
        <div>{ticket.id}</div>
      </div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0 hidden lg:flex"></div>
      <div className="flex-1 flex justify-between items-center flex-col lg:flex-row">
        <div>Date: </div>
        <div className="text-center">{ticket.date?.toDateString()}</div>
      </div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0"></div>
      <div className="flex-1">
        <div className="flex-1 flex justify-between items-center">
          <div>Subject: </div>
          <div className="text-center">{ticket.subject}</div>
        </div>
      </div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0"></div>
      <div className="flex-1">
        <div className="flex-1 flex justify-between items-center">
          <div>Type: </div>
          <div className="text-center">{ticket.type}</div>
        </div>
      </div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0"></div>
      <Link
        href={`/accessnet/admin/it-ticket-open/${ticket.id}`}
        className="flex justify-center items-center"
      >
        <button className="btn btn-secondary">View Case</button>
      </Link>
    </div>
  );
}
