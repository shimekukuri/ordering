import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function page() {
  if (
    !(await getUserPermissions([
      'admin',
      'acessnet',
      'changeUser',
      'deleteUser',
    ]))
  ) {
    return redirect('/unauthorized');
  }

  const deleteUser = async (data: FormData) => {
    'use server';

    try {
      console.log('meep');
    } catch (error) {
      console.log(error);
      redirect('./failure');
    }
    return redirect('./success');
  };

  return (
    <div className="h-full flex-1 flex justify-center items-center p-4">
      <form
        className="h-full w-full lg:w-2/3 lg:h-2/3 flex flex-col justify-center items-center gap-4"
        action={deleteUser}
      >
        <h1 className="text-3xl text-center">Submit New Maintenance Ticket</h1>
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
          <option value={'uniformshop'}> Uniform Shop</option>
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
