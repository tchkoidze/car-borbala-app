import { Link } from "react-router-dom";
import Close from "../svg/Close";

function Menu(props: { setShowMenu: (bool: boolean) => void }) {
  return (
    <div className="bg-white absolute right-0 p-6">
      <Close onClick={() => props.setShowMenu(false)} />
      <ul className=" flex flex-col gap-5 mt-2">
        <li>
          <Link to={"/"} className="text-blue-950">
            About
          </Link>
        </li>
        <li>
          <Link to={"/"} className="text-blue-950">
            Location
          </Link>
        </li>
        <li>
          <Link to={"/"} className="text-blue-950">
            Careers
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
