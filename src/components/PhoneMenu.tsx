import { RxCross1 } from "react-icons/rx";

interface PhoneMenuProps {
  action: () => void;
  className: string;
}

function PhoneMenu({ action, className }: PhoneMenuProps) {
  return (
    <div
      className={`absolute right-0 top-0 h-full z-100 p-4 pt-12 flex flex-col gap-5 glass ${className}`}
    >
      <RxCross1 className="mx-auto" onClick={action} />
      <li className="mt-8">Travel Guide</li>
      <li>Famous Places</li>
      <li>Contact Us</li>
    </div>
  );
}

export default PhoneMenu;
