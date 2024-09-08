import { Link } from "react-scroll";
import Navbar from "./Navbar";
const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};
export default NavLink;
