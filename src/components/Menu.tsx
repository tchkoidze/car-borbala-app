import { Link } from "react-router-dom";
import Close from "../svg/Close";
import Language from "./language";
import { useTranslation } from "react-i18next";
import AddtoCart from "../svg/AddtoCart";

function Menu(props: { setShowMenu: (bool: boolean) => void }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white absolute right-0 p-6">
      <Close onClick={() => props.setShowMenu(false)} />
      <ul className=" flex flex-col gap-5 mt-2">
        <li>
          <Link to={"/home"} className="text-blue-950">
            {t("header.menu.home")}
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="text-blue-950">
            {t("header.menu.about")}
          </Link>
        </li>
        <li>
          <Link to={"/"} className="text-blue-950">
            {t("header.menu.location")}
          </Link>
        </li>
        <li>
          <Link to={"/career"} className="text-blue-950">
            {t("header.menu.careers")}
          </Link>
        </li>
        <li>
          <AddtoCart />
        </li>
        <li>
          <Language />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
