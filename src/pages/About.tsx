import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Carborbala: about";
  }, []);
  return (
    <div className="flex flex-col justify-center h-[100vh] mx-6">
      <h1 className="font-[roboto] font-black text-3xl mt-4 mb-8">
        About our company and us
      </h1>
      <p className="">
        Carborbala is an aggregator of local car rental companies. We find small
        car rentals that work only in their city, carefully choose the best ones
        and later on, track the quality of their work. So that customers could
        get the best service for the lowest price. We have been operating since
        2011 and annually serve more than 30,000 customers from all around the
        world.
      </p>
    </div>
  );
};

export default About;
