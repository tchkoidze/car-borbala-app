const Home = () => {
  return (
    <main className="w-full h-screen home-hero-mobile">
      <h1 className="font-[roboto] font-black text-2xl text-white">
        Start your trip with us
      </h1>
      <div className="px-4">
        <form className="flex flex-col bg-white rounded p-3">
          <input
            type="text"
            placeholder="Pick up location"
            className="border border-gray-400 rounded"
          />
          <input
            type="text"
            placeholder="Return location"
            className="border border-gray-400 rounded"
          />
          <div className="flex flex-col">
            <label htmlFor="pickup-date" className="text-white">
              Pick up date
            </label>
            <input
              type="date"
              id="pickup-date"
              className="border border-gray-400 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Return-date" className="text-white">
              Return date
            </label>
            <input
              type="date"
              id="Return-date"
              className="border border-gray-400 rounded"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
