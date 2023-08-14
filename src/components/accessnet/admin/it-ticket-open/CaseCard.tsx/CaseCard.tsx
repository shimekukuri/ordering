import { Ticket } from '@prisma/client';

export default function CaseCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="flex flex-col md:flex-row bg-secondary bg-opacity-40 rounded-2xl shadow-2xl p-2">
      <div className="flex-1 flex justify-between items-center">
        <div>Case ID:</div>
        <div>{ticket.id}</div>
      </div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0"></div>
      <div className="flex-1">
        <div className="flex-1 flex justify-between items-center">
          <div>Date: </div>
          <div>{ticket.date?.toDateString()}</div>
        </div>
      </div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0"></div>
      <div className="flex-1">{ticket.subject}</div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0"></div>
      <div className="flex-1">{ticket.type}</div>
      <div className="divider sm:divider-vertical md:divider-horizontal m-0"></div>
      <div className="flex-1">{ticket.text}</div>
    </div>
  );
}
