import { BiLogoRedbubble } from "react-icons/bi";
const Footer = () => {
  return (
    <div className=" bg-blue-950 text-white font-custom flex justify-center items-center gap-2 font-medium p-2 shadow-md">
      <div>
        <BiLogoRedbubble className="text-5xl text-white font-bold" />
      </div>
      <div className=" flex justify-center items-center text-lg gap-1">
        <h1>Red Bubble |</h1>
        <h1>2023 |</h1>
        <h1>All Right Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
