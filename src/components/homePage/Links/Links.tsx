export default function Links() {
  return (
    <div className="h-[100dvh]">
      {/* small screens */}
      <div className="flex flex-1 md:hidden justify-around flex-wrap items-center p-4">
        <div className="min-w-[45%] max-w-[45%] md:min-w-0 bg-red-300 backdrop-blur-md opacity-0 animate-fade-in-200 p-2 rounded-full shadow-2xl">
          <img src={"./result.png"} />
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
      {/* Large Screens */}
      <section className="hidden md:flex flex-1 justify-around items-center gap-4 p-16">
        <div className="flex-1 rounded-full bg-red-300 bg-opacity-40 p-4 aspect-square backdrop-blur-md opacity-0 animate-fade-in-200 hover:opacity-100">
          <img className="hover:animate-scale-200" src={"./result.png"} />
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
  );
}
