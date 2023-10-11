const Home = () => {
  return (
    <main>
      <div className="bg-green-950">
        <div className="w-full  home-hero-mobile pb-5">
          <h1 className="font-[roboto] font-black text-2xl text-white">
            Start your trip with us
          </h1>
          <div className="px-4 mt-[38%]">
            <form className="flex flex-col gap-4 bg-white rounded p-3">
              <input
                type="text"
                placeholder="Pick up location"
                className="border border-gray-400 rounded focus:outline-green-500 p-3"
              />
              <input
                type="text"
                placeholder="Return location"
                className="border border-gray-400 rounded focus:outline-green-500 p-3"
              />
              <div className="flex flex-col">
                <label htmlFor="pickup-date" className="text-sky-900 mb-2">
                  Pick up date
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  className="border border-gray-400 rounded focus:outline-green-500 p-3"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Return-date" className="text-sky-900  mb-2">
                  Return date
                </label>
                <input
                  type="date"
                  id="Return-date"
                  className="border border-gray-400 rounded focus:outline-green-500 p-3"
                />
              </div>
              <button className="border border-green-500 rounded p-3 hover:bg-green-500">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
