import Song from "../components/Song";
import SongSection from "../components/SongSection";
import Searchbar from "../components/Searchbar";

import PlusIcon from "../components/PlusIcon";
import { Link, useNavigate } from "react-router-dom";
import { useSongs } from "../contexts/SongContex";
import GenerateButton from "../components/GenerateButton";

function Home() {
  const navigate = useNavigate();
  const { song1, song2 } = useSongs();

  function handleClick(id) {
    navigate(`/search/${id}`);
  }

  return (
    <div className="flex flex-col items-center p-6 w-screen h-screen bg-[#121212] text-white overflow-hidden">
      <Link className="w-1/4" to="/search/1">
        <Searchbar />
      </Link>
      <SongSection>
        <Song songId={1} song={song1} handleClick={handleClick} />
        <PlusIcon />
        <Song songId={2} song={song2} handleClick={handleClick} />
      </SongSection>
      <GenerateButton />
    </div>
  );
}

export default Home;
