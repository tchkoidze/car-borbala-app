import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Fasebook, Twitter } from "../svg";
import Instagram from "../svg/Instagram";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col items-center md:flex-row md:justify-between md:items-center bg-green-950 bg-gradient-to-l from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] px-6 pt-16 pb-20">
      <Logo />
      <ul className="flex gap-2 mt-10 text-white md:gap-6 md:m-0">
        <Link to="/about"> {t("header.menu.about")}</Link>
        <Link to="/location"> {t("header.menu.location")}</Link>
        <Link to="career"> {t("header.menu.careers")}</Link>
      </ul>
      <ul className="flex gap-3 mt-20 md:m-0 md:gap-16">
        <Fasebook />
        <Twitter />
        <Instagram />
      </ul>
    </footer>
  );
};

export default Footer;
