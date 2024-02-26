import { Avard, Calendar, Checkin } from "../svg";
import tbilisi from "../assets/images/tbilisi.jpg";
import berlin from "../assets/images/berlin.jpg";
import brussels from "../assets/images/brussels.jpg";
import paris from "../assets/images/paris.jpg";
import searchSchema from "../schema/search-schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Vehicle from "../components/Vehicle";
import { useState } from "react";

import { useTranslation } from "react-i18next";

interface CarType {
  id: number;
  img: string;
  model: string;
  type: string;
  price: string;
}
interface VehicleProps {
  setShowBooking: (show: boolean) => void;
  setSelectCar: (car: CarType) => void;
}
const Home: React.FC<VehicleProps> = ({ setSelectCar, setShowBooking }) => {
  const { t } = useTranslation();
  //const [selectCar, setSelectCar] = useState<CarType | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(searchSchema) });

  const [hide, setHide] = useState(false);

  const onSubmit: SubmitHandler<{
    pickupLocation: string;
    returnLocation: string;
    pickupDate: Date;
    returnDate: Date;
  }> = async (data) => {
    ///////////// gasarkvevia aq datasa ra vuqna
    console.log(data);
    console.log(errors);

    setHide(!hide);
  };

  return (
    <main>
      <div className="bg-green-950 ">
        <div className="w-full  home-hero-mobile pb-5 lg:h-screen">
          <h1 className="font-[roboto] font-black text-3xl md:text-4xl text-white text-opacity-50 px-4 pt-16">
            {t("hero")}
          </h1>
          <div className="px-4 mt-[38%] lg:w-[60%] lg:mx-auto lg:mt-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 bg-white bg-opacity-90 rounded p-3"
            >
              <input
                {...register("pickupLocation")}
                type="text"
                placeholder="Pick up location"
                className="border border-gray-400 rounded focus:outline-green-500 p-3"
              />
              <input
                {...register("returnLocation")}
                type="text"
                placeholder="Return location"
                className="border border-gray-400 rounded focus:outline-green-500 p-3"
              />
              <div className="flex flex-col">
                <label htmlFor="pickup-date" className="text-sky-900 mb-2">
                  Pick up date
                </label>
                <input
                  {...register("pickupDate")}
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
                  {...register("returnDate")}
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

      {hide ? (
        <Vehicle setSelectCar={setSelectCar} setShowBooking={setShowBooking} />
      ) : null}
      <div className="px-4 my-14">
        <h2 className="text-black font-[barlow] font-bold text-3xl leading-tight mb-9">
          {t("home.city.header")}
        </h2>
        <div className="flex flex-col gap-5 items-center md:flex-row md:flex-wrap justify-center">
          <div className="bg-gray-200 rounded overflow-x-hidden max-w-[343px]">
            <img src={tbilisi} alt="tbilisi" className="w-[343px] h-[229px]" />
            <p className="mt-10 p-4 text-black font-[barlow] font-bold text-2xl leading-tight">
              {t("home.city.1")}
            </p>
          </div>
          <div className="bg-gray-200 rounded overflow-x-hidden max-w-[343px]">
            <img src={berlin} alt="tbilisi" />
            <p className="mt-10 p-4 text-black font-[barlow] font-bold text-2xl leading-tight">
              {t("home.city.2")}
            </p>
          </div>
          <div className="bg-gray-200 rounded overflow-x-hidden max-w-[343px]">
            <img src={brussels} alt="tbilisi" />
            <p className="mt-10 p-4 text-black font-[barlow] font-bold text-2xl leading-tight">
              {t("home.city.3")}
            </p>
          </div>
          <div className="bg-gray-200 rounded overflow-x-hidden max-w-[343px]">
            <img src={paris} alt="tbilisi" />
            <p className="mt-10 p-4 text-black font-[barlow] font-bold text-2xl leading-tight">
              {t("home.city.4")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 font-[barlow] px-4 py-10 md:flex-row md:py-16 md:justify-center">
        <div className="flex flex-col items-center gap-3">
          <Avard />
          <h2 className="text-black font-[barlow] font-bold text-2xl leading-tight pb-2">
            {t("details.discounts.discount")}
          </h2>
          <p className="flex flex-col items-center">
            {t("details.discounts.info")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Calendar />
          <h2 className="text-black font-[barlow] font-bold text-2xl leading-tight pb-2">
            {t("details.time.period")}
          </h2>
          <p className="flex flex-col items-center">{t("details.time.info")}</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Checkin />
          <h2 className="text-black font-[barlow] font-bold text-2xl leading-tight pb-2">
            {t("details.checkins.checkin")}
          </h2>
          <p className="text-sm ">{t("details.checkins.info")}</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
