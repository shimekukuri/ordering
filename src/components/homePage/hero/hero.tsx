import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import LoginButton from '@/components/LayoutComponents/mainlayout/navbar/LoginButton/LoginButton';
import { getServerSession } from 'next-auth';

export default async function Hero() {
  const session = await getServerSession(OPTIONS);
  if (session?.user) {
    return <></>;
  }

  return (
    <div className="flex flex-1 flex-col md:min-h-[90dvh]" tabIndex={0}>
      <div className="flex md:flex-1 md:flex-col flex-col-reverse p-4 m-4 rounded-2xl shadow-2xl bg-[url('https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/102418843_0901-EDGE-Champions-Access_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d')] bg-auto bg-center bg-no-repeat md:bg-cover">
        <section className="flex-1"></section>
        <div className="md:flex-1"></div>
        <div className="flex justify-center items-center flex-col">
          <img src={'./result.png'} className="w-[25dvh]" />
          <h1 className="text-5xl text-center text-slate-600">
            Access Family Pharmacy
          </h1>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
