import { useSongs } from "../contexts/SongContex";
import DeleteButton from "./DeleteButton";

function Searchbar() {
  const { setSearchQuery, searchQuery, getSongs } = useSongs();

  return (
    <form className="relative text-[#b3b3b3] transition duration-200 group border-[#121212] border-2 hover:border-[#414141] overflow-hidden rounded-full w-full">
      <input
        className="outline-none bg-[#242424] rounded-full w-full cursor-pointer py-3 px-11 placeholder-[#b3b3b3] transition duration-200 group-hover:bg-[#2a2a2a]"
        placeholder="What do you want to listen?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            getSongs(searchQuery);
          }
        }}
      />
      <svg
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        className="Svg-sc-ytk21e-0 dYnaPI mOLTJ2mxkzHJj6Y9_na_ absolute left-[14px] top-[15px] w-[18px] h-[18px] "
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z" />
      </svg>
      <DeleteButton />
    </form>
  );
}

export default Searchbar;
