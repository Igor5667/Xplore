import {
  MdOutlineAirplanemodeActive,
  MdOutlineAlignHorizontalLeft,
} from "react-icons/md";
import Button from "./Button";

interface NavBarProps {
  className?: string;
}

function NavBar({ className }: NavBarProps) {
  return (
    <nav
      className={`flex justify-between items-center px-[10%] bg-gradient-to-b from-[#00000054] to-transparent ${className}`}
    >
      <header className="flex me-auto justify-center items-center">
        <MdOutlineAirplanemodeActive className="text-xplore-pink text-3xl" />
        <h1 className="text-2xl mt-2">Xplore</h1>
        <MdOutlineAlignHorizontalLeft className=" mt-2 ms-[2px]" />
      </header>
      <menu className="flex me-12 gap-3">
        <li>Travel Guide</li>
        <li>Famous Places</li>
        <li>Contact Us</li>
      </menu>
      <Button className="flex justify-center items-center gap-2">
        <MdOutlineAirplanemodeActive size={20} />
        <span className="text-sm">Bookings</span>
      </Button>
    </nav>
  );
}

export default NavBar;
