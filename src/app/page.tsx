export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex md:flex-1 md:flex-col flex-col-reverse p-4 m-4 rounded-2xl shadow-2xl bg-[url('https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/102418843_0901-EDGE-Champions-Access_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d')] bg-auto bg-center bg-no-repeat md:bg-cover">
        <section className="flex-1"></section>
        <div className="md:flex-1"></div>
        <div className="flex justify-center items-center flex-col">
          <img src={"./result.png"} className="w-[25dvh]" />
          <h1 className="text-5xl text-center text-slate-600">
            Access Family Pharmacy
          </h1>
        </div>
        <section className="hidden md:flex flex-1 justify-around items-center gap-4 p-4">
          <div className="flex-1 rounded-full bg-red-300 bg-opacity-40 p-4 aspect-square backdrop-blur-md opacity-0 animate-fade-in-200 hover:opacity-100">
            <img
              className="hover:animate-scale-200"
              src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png"
            />
          </div>
          <div className="flex-1 rounded-full bg-blue-300 bg-opacity-40 p-4 aspect-square backdrop-blur-md opacity-0 animate-fade-in-400">
            <img
              className="hover:animate-scale-200"
              src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png"
            />
          </div>
          <div className="flex-1 rounded-full bg-yellow-300 bg-opacity-40 p-4 aspect-square backdrop-blur-md opacity-0 animate-fade-in-600">
            <img
              className="hover:animate-scale-200"
              src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png"
            />
          </div>
          <div className="flex-1 rounded-full bg-green-300 bg-opacity-40 p-4 aspect-square backdrop-blur-md opacity-0 animate-fade-in-800">
            <img
              className="hover:animate-scale-200"
              src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png"
            />
          </div>
        </section>
      </div>
      <div className="flex flex-1 md:hidden justify-around flex-wrap items-center p-4">
        <div className="min-w-[45%] max-w-[45%] md:min-w-0 bg-red-300 backdrop-blur-md opacity-0 animate-fade-in-200 p-2 rounded-full shadow-2xl">
          <img src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png" />
        </div>
        <div className="min-w-[45%] max-w-[45%] md:min-w-0 bg-blue-300 backdrop-blur-md opacity-0 animate-fade-in-400 p-2 rounded-full shadow-2xl">
          <img src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png" />
        </div>
        <div className="min-w-[45%] max-w-[45%] md:min-w-0 bg-yellow-300 backdrop-blur-md opacity-0 animate-fade-in-600 p-2 rounded-full shadow-2xl">
          <img src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png" />
        </div>
        <div className="min-w-[45%] max-w-[45%] md:min-w-0 bg-green-300 backdrop-blur-md opacity-0 animate-fade-in-800 p-2 rounded-full shadow-2xl">
          <img src="https://static.wixstatic.com/media/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png/v1/fill/w_410,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f9d9b_82034209dc04459c9cd9c8b28f8da30e~mv2.png" />
        </div>
      </div>
    </div>
  );
}
