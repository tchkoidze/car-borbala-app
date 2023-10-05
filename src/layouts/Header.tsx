import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex items-center bg-red-500 px-6">
      <Logo />
      <ul className="hidden md:flex gap-2 ml-4">
        <Link to="#">About</Link>
        <Link to="#">Location</Link>
        <Link to="#">Careers</Link>
      </ul>
      <button className="ml-auto mr-2">sign in / join</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        className="md:hidden"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h19.692v3.692H0zM0 6.154h19.692v3.692H0zM0 12.308h19.692V16H0z" />
        </g>
      </svg>
    </header>
  );
};

export default Header;
