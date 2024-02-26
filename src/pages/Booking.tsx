import { useState } from "react";
import Pay from "../components/Payment";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../schema/loginSchema";
import bookingSchema from "../schema/bookingSchema";

interface CarType {
  id: number;
  img: string;
  model: string;
  type: string;
  price: string;
}

interface BookingProps {
  selectCar: CarType | undefined;
  setShowBooking: (show: boolean) => void;
}

const Booking: React.FC<BookingProps> = ({ selectCar, setShowBooking }) => {
  const [hideForm, setHideForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bookingSchema) });

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Stop event propagation to prevent it from reaching parent elements
    e.stopPropagation();
  };

  const onSubmit: SubmitHandler<{
    pickupPlace: string;
    pickupTime: string;
    dropoffPlace: string;
    dropoffTime: string;
    name: string;
    email: string;
    number: string;
  }> = async (data) => {
    ///////////// gasarkvevia aq datasa ra vuqna
    console.log(data);
    console.log(errors);

    setHideForm(!hideForm);
  };
  return (
    <div
      onClick={() => setShowBooking(false)}
      className="fixed flex items-center overflow-auto z-[1000]  top-0 left-0 right-0 bottom-0  bg-[#333E50]/[0.9] "
    >
      <div
        onClick={handleClick}
        className="w-[60%] my-3 mx-auto py-3 px-6 bg-white  "
      >
        {!hideForm ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>{selectCar?.model}</p>
              <h3 className="font-bold text-2xl">Pick up</h3>
              <div className="flex flex-col">
                <label htmlFor="pickupPlace" className="text-gray-400">
                  Pick up place
                </label>
                <input
                  {...register("pickupPlace")}
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
                  {...register("pickupTime")}
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
                  Drop-off place
                </label>
                <input
                  {...register("dropoffPlace")}
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
                  {...register("dropoffTime")}
                  name="dropoffTime"
                  type="text"
                  className="bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-2xl">Your details</h3>

              <input
                {...register("name")}
                name="name"
                placeholder="Full name"
                type="text"
                className="w-full bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray my-2"
              />
              <input
                {...register("email")}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray my-2"
              />
              <input
                {...register("number")}
                name="number"
                type="number"
                placeholder="Phone number"
                inputMode="decimal"
                className="w-full bg-slate-50 focus:bg-white outline-none border rounded px-3 py-2 border-[border-gray] bg-bg-gray my-2"
              />
            </div>
            <div>
              <button className="block mx-auto">book now</button>
            </div>
          </form>
        ) : (
          <Pay />
        )}
      </div>
    </div>
  );
};
export default Booking;
