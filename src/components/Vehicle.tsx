import prius from "../assets/images/Prius.png";

import priusC from "../assets/images/toyota-prius-c.png";
import cclass from "../assets/images/benz-c-class.png";
import hrv from "../assets/images/Honda-HR-V.png";
import prado from "../assets/images/Land-Cruiser-Prado.png";
import landRover from "../assets/images/land-roverland.png";
import data from "../carData.json";

const Vehicle = () => {
  return (
    <div className="flex flex-col items-center px-6 md:items-start">
      {data.map((car) => (
        <div
          key={car.id}
          className="md:flex md:justify-between items-center  md:w-[100%] border-b border-b-slate-200"
        >
          <img src={car.img} alt={car.model} className="max-w-xs " />
          <div className="flex justify-between md:flex-col md:gap-12">
            <div>
              <h3>{car.model}</h3>
              <p>{car.type}</p>
            </div>
            <div>
              <p>Pay at Desk</p>
              <p>{car.price}</p>
            </div>
          </div>
          <div className="flex items-center my-5">
            <button className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white">
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vehicle;
//md:grid grid-cols-[1fr_1fr] gap-24
