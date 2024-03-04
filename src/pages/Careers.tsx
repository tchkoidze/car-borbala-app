import { Link } from "react-router-dom";
import staf from "../assets/images/staf.jpg";
import { useEffect } from "react";

const Career = () => {
  useEffect(() => {
    document.title = "Carborbala: career";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center  mx-6 my-16">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div>
          <h1 className="text-black font-[barlow] font-bold text-3xl leading-tight">
            Are you interested with our team?{" "}
          </h1>
          <p className="text-[#939CAB] my-8">
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </p>
          <p className="text-black font-[barlow] font-bold text-xl">
            Send your cv <Link to={"/"}>career@carborbala.com</Link>
          </p>
        </div>
        <div>
          <img src={staf} className="rounded-[9999px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Career;
