import data from "../carData.json";
interface CarType {
  id: number;
  img: string;
  model: string;
  type: string;
  price: string;
}

interface VehicleProps {
  setSelectCar: (car: CarType) => void;
}

const Vehicle: React.FC<VehicleProps> = ({ setSelectCar }) => {
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
            <button
              onClick={() => setSelectCar(car)}
              className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white"
            >
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
