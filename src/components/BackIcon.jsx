import backImg from "../assets/back.svg";

function BackIcon() {
  return (
    <img
      className="w-8 h-8 absolute left-5 top-7 cursor-pointer hover:opacity-75 transition-all"
      src={backImg}
      alt="back-icon"
    />
  );
}

export default BackIcon;
