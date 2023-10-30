import Logo from "../components/Logo";
import { Link } from "react-router-dom";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Header = (props: {
  setShowMenu: (bool: boolean) => void;
  showMenu: boolean;
}) => {
  const { t, i18n } = useTranslation();

  const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <header className="w-full flex items-center bg-green-950 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] px-6">
      <Logo />
      <ul className="hidden md:flex gap-2 ml-6 text-white">
        <Link to="#" className="hover:shadow-[0_2px_0_0_rgb(255,255,255)]">
          {t("header.menu.about")}
        </Link>
        <Link to="#" className="hover:shadow-[0_2px_0_0_rgb(255,255,255)]">
          {t("header.menu.location")}
        </Link>
        <Link to="#" className="hover:shadow-[0_2px_0_0_rgb(255,255,255)]">
          {t("header.menu.careers")}
        </Link>
      </ul>
      <select name="language" id="languge" onChange={change}>
        <option value="en">Eng</option>
        <option value="geo">Geo</option>
      </select>
      <button className="ml-auto mr-2 text-white uppercase hover:shadow-[0_2px_0_0_rgb(255,255,255)]">
        sign in / join
      </button>
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
