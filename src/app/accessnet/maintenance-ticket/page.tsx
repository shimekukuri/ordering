import { prisma } from '@/ulitiles/prisma/db';
import { locations, ticketType } from '@prisma/client';
import { redirect } from 'next/navigation';

export default function Page() {
  const createTicket = async (data: FormData) => {
    'use server';
    const subject = data.get('subject');
    const location = data.get('location');
    const description = data.get('description');

    if (!subject || !location || !description) {
      return;
    }

    try {
      let resp = await prisma.ticket.create({
        data: {
          location: location as locations,
          subject: subject as string,
          text: description as string,
          type: 'IT' as ticketType,
        },
      });
    } catch (error) {
      console.log(error);
      redirect('./failure');
    }
    redirect('./success');
  };

  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <form
        className="h-full w-full lg:w-2/3 lg:h-2/3 flex flex-col justify-center items-center gap-4"
        action={createTicket}
      >
        <h1 className="text-3xl text-center">
          Submit New Technical Support Ticket
        </h1>
        <div className="divider"></div>
        <input
          required
          type="text"
          placeholder="Subject"
          name="subject"
          className="input input-bordered input-primary w-full max-w-xs shadow-xl"
        />
        <select
          className="select select-secondary w-full max-w-xs shadow-xl"
          name="location"
        >
          <option>Please Select a location</option>
          <option>access</option>
          <option>whitwell</option>
          <option>jasper</option>
          <option>cates</option>
        </select>
        <textarea
          required
          placeholder="Description"
          name="description"
          className="textarea textarea-bordered textarea-accent w-full max-w-xs shadow-xl"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
