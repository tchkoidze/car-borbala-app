import prius from "../assets/images/Prius.png";

import priusC from "../assets/images/toyota-prius-c.png";
import cclass from "../assets/images/benz-c-class.png";
import hrv from "../assets/images/Honda-HR-V.png";
import prado from "../assets/images/Land-Cruiser-Prado.png";
import landRover from "../assets/images/land-roverland.png";

const Vehicle = () => {
  return (
    <div className="flex flex-col items-center px-6 md:items-start">
      <div className="md:flex md:justify-between items-center  md:w-[100%] border-b border-b-slate-200">
        <img src={prius} alt="" className="max-w-xs " />
        <div className="flex justify-between md:flex-col md:gap-12">
          <div>
            <h3>Toyota Prius</h3>
            <p>Automatic 1.8l, TPL</p>
          </div>

          <div>
            <p>Pay at Desk</p>
            <p>
              $22 <span>/day</span>
            </p>
          </div>
        </div>
        <div className="flex items-center my-5">
          <button className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white">
            Select
          </button>
        </div>
      </div>
      <div className="md:flex md:justify-between items-center border-b border-b-slate-200  md:w-[100%] pb-5">
        <img src={priusC} alt="" className="max-w-xs " />
        <div className="flex justify-between md:flex-col md:gap-12">
          <div>
            <h3>Toyota Prius C</h3>
            <p>Automatic 1.8l, TPL</p>
          </div>

          <div>
            <p>Pay at Desk</p>
            <p>
              $25 <span>/day</span>
            </p>
          </div>
        </div>
        <div className="flex items-center my-5">
          <button className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white">
            Select
          </button>
        </div>
      </div>
      <div className="md:flex md:justify-between items-center  md:w-[100%] border-b border-b-slate-200 py-5">
        <img src={cclass} alt="" className="max-w-xs " />
        <div className="flex justify-between md:flex-col md:gap-12">
          <div>
            <h3>Mersedes Benz c-className</h3>
            <p>Automatic 4.0l, CDW</p>
          </div>

          <div>
            <p>Pay at Desk</p>
            <p>
              $50 <span>/day</span>
            </p>
          </div>
        </div>
        <div className="flex items-center my-5">
          <button className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white">
            Select
          </button>
        </div>
      </div>

      <div className="md:flex md:justify-between items-center  md:w-[100%] border-b border-b-slate-200">
        <img src={hrv} alt="" className="max-w-xs " />
        <div className="flex justify-between md:flex-col md:gap-12">
          <div>
            <h3>Honda HR-V</h3>
            <p>Automatic 4.0l, CDW</p>
          </div>

          <div>
            <p>Pay at Desk</p>
            <p>
              $39 <span>/day</span>
            </p>
          </div>
        </div>
        <div className="flex items-center my-5">
          <button className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white">
            Select
          </button>
        </div>
      </div>

      <div className="md:flex md:justify-between items-center  md:w-[100%] border-b border-b-slate-200 py-8">
        <img src={prado} alt="" className="max-w-xs " />
        <div className="flex justify-between md:flex-col md:gap-12">
          <div>
            <h3>Toyota Prado</h3>
            <p>Automatic 5.0l, CDW</p>
          </div>

          <div>
            <p>Pay at Desk</p>
            <p>
              $59 <span>/day</span>
            </p>
          </div>
        </div>
        <div className="flex items-center my-5">
          <button className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white">
            Select
          </button>
        </div>
      </div>

      <div className="md:flex md:justify-between items-center  md:w-[100%] border-b border-b-slate-200">
        <img src={landRover} alt="" className="max-w-xs " />
        <div className="flex justify-between md:flex-col md:gap-12">
          <div>
            <h3>Landrover Sport</h3>
            <p>Automatic 5.0l, CDW</p>
          </div>

          <div>
            <p>Pay at Desk</p>
            <p>
              $79 <span>/day</span>
            </p>
          </div>
        </div>
        <div className="flex items-center my-5">
          <button className="mx-auto bg-[#FCB72B] px-4 py-1 rounded-3xl border hover:border-[#FCB72B] hover:bg-white">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
//md:grid grid-cols-[1fr_1fr] gap-24
