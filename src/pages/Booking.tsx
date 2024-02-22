import Pay from "../components/Payment";

interface CarType {
  id: number;
  img: string;
  model: string;
  type: string;
  price: string;
}

interface BookingProps {
  selectCar: CarType | undefined;
}

const Booking: React.FC<BookingProps> = ({ selectCar }) => {
  return (
    <div className="fixed overflow-auto z-[1000]  top-0 left-0 right-0 bottom-0  bg-[#333E50]/[0.9] no-scrollbar">
      <div className="  w-[50%] my-3 mx-auto py-3 px-6 bg-white  ">
        <div>
          <p>{selectCar?.model}</p>
          <h3 className="font-bold text-2xl">Pick up</h3>
          <div className="flex flex-col">
            <label htmlFor="pickupPlace" className="text-gray-400">
              Pick up place
            </label>
            <input
              name="pickupPlace"
              type="text"
              className="bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pickupTime" className="text-gray-400">
              Pick up time
            </label>
            <input
              name="pickupTime"
              type="text"
              className="bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Drop off</h3>
          <div className="flex flex-col">
            <label htmlFor="dropoffPlace" className="text-gray-400">
              Drop-off olace
            </label>
            <input
              name="dropoffPlace"
              type="text"
              className="bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dropoffTime" className="text-gray-400">
              Drop-off time
            </label>
            <input
              name="dropoffTime"
              type="text"
              className="bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Your details</h3>
          <form className="flex flex-col">
            <input
              placeholder="Full name"
              type="text"
              className="w-full bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray my-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray my-2"
            />
            <input
              type="number"
              placeholder="Phone number"
              inputMode="decimal"
              className="w-full bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray my-2"
            />
          </form>
        </div>
        <Pay />
      </div>
    </div>
  );
};
export default Booking;
