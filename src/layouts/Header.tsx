import Logo from "../components/Logo";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Language from "../components/language";
import avatar from "../assets/images/avatar.svg";

const Header = (props: {
  setShowMenu: (bool: boolean) => void;
  showMenu: boolean;
  signed: boolean;
  setShowPopup: (value: boolean) => void;
}) => {
  const { t, i18n } = useTranslation();
  console.log("language is: ", i18n.language);
  console.log(props.signed);
  /*const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
    console.log(event.target.value);
    console.log(i18n.language);
    //console.log(45);
  };*/

  return (
    <header className="w-full flex items-center bg-green-950 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] px-6">
      <Logo />
      <ul className="hidden md:flex gap-2 ml-6 text-white">
        <Link
          to="/home"
          id="home"
          className="hover:shadow-[0_2px_0_0_rgb(255,255,255)]"
        >
          {t("header.menu.home")}
        </Link>
        <Link
          to="/about"
          id="about"
          className="hover:shadow-[0_2px_0_0_rgb(255,255,255)]"
        >
          {t("header.menu.about")}
        </Link>
        <Link
          to="/location"
          className="hover:shadow-[0_2px_0_0_rgb(255,255,255)]"
        >
          {t("header.menu.location")}
        </Link>
        <Link
          id="careers-link"
          to="career"
          className="hover:shadow-[0_2px_0_0_rgb(255,255,255)]"
        >
          {t("header.menu.careers")}
        </Link>
      </ul>
      {/*<select
        name="language"
        id="languge"
        value={i18n.language}
        onChange={change}
      >
        <option value="en">Eng</option>
        <option value="geo">Geo</option>
      </select>*/}
      <div className="hidden md:block ml-2">
        <Language />
      </div>

      {props.signed ? (
        <img
          src={avatar}
          alt="avatar"
          onClick={() => props.setShowPopup(true)}
          className="w-8 h-8 ml-auto"
        />
      ) : (
        <button className="ml-auto mr-2 text-white uppercase hover:shadow-[0_2px_0_0_rgb(255,255,255)]">
          <Link to={"/login"}>sign in / join</Link>
        </button>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        className="md:hidden"
        onClick={() => props.setShowMenu(true)}
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h19.692v3.692H0zM0 6.154h19.692v3.692H0zM0 12.308h19.692V16H0z" />
        </g>
      </svg>
    </header>
  );
};

export default Header;

/*
<button className="ml-auto mr-2 text-white uppercase hover:shadow-[0_2px_0_0_rgb(255,255,255)]">
        {props.signed ? (
          <img src={avatar} alt="avatar" className="w-8 h-8" />
        ) : (
          <Link to={"/login"}>sign in / join</Link>
        )}
      </button>
*/
