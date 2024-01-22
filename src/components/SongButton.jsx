import { useNavigate } from "react-router-dom";

function SongButton({ children, activeButton, buttonId }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/search/${buttonId}`)}
      className={
        activeButton == buttonId
          ? "transition-all duration-200 bg-[#1ed760]  hover:bg-[#1FDF64] text-black font-semibold py-1 px-4 rounded-full"
          : "transition-all duration-200 bg-[#242424]  hover:bg-[#2a2a2a] text-[#b3b3b3] font-semibold py-1 px-4 rounded-full"
      }
    >
      {children}
    </button>
  );
}

export default SongButton;
