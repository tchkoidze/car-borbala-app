import map from "../assets/images/map@2x-desk.png";
import mapm from "../assets/images/map-mob.png";

const LocationPage = () => {
  return (
    <div className="h-[100vh]">
      <img src={map} className="hidden md:block h-[100%]" alt="map" />
      <img src={mapm} className="w-[100%] md:hidden" alt="map" />
    </div>
  );
};

export default LocationPage;
