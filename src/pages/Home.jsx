import Song from "../components/Song";
import SongSection from "../components/SongSection";
import Searchbar from "../components/Searchbar";

import songImg1 from "../assets/song-1.jpeg";
import songImg2 from "../assets/song-2.jpeg";
import PlusIcon from "../components/PlusIcon";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/search/${id}`);
  }

  return (
    <div className="flex flex-col items-center p-6 w-screen h-screen bg-[#121212] text-white overflow-hidden">
      <Link className="w-1/4" to="/search/1">
        <Searchbar />
      </Link>

      <SongSection>
        <Song
          songId={1}
          songImg={songImg1}
          songName={"Patato"}
          songWriter={"Makato"}
          handleClick={handleClick}
        />
        <PlusIcon />
        <Song
          songId={2}
          songImg={songImg2}
          songName={"Kiziroğlu"}
          songWriter={"Ruhi Su"}
          handleClick={handleClick}
        />
      </SongSection>
    </div>
  );
}

export default Home;
