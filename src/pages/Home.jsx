import Song from "../components/Song";
import SongSection from "../components/SongSection";
import Searchbar from "../components/Searchbar";

import songImg1 from "../assets/song-1.jpeg";
import songImg2 from "../assets/song-2.jpeg";
import PlusIcon from "../components/PlusIcon";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center p-6 w-screen h-screen bg-[#121212] text-white overflow-hidden">
      <Link to="/search" className="block w-1/4">
        <Searchbar />
      </Link>
      <SongSection>
        <Song songImg={songImg1} songName={"Patato"} songWriter={"Makato"} />
        <PlusIcon />
        <Song
          songImg={songImg2}
          songName={"Kiziroğlu"}
          songWriter={"Ruhi Su"}
        />
      </SongSection>
    </div>
  );
}

export default Home;
