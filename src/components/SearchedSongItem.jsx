import { useSongs } from "../contexts/SongContex";
import { useNavigate } from "react-router-dom";

function SearchedSongItem({ songId, song, currentSong }) {
  const { setSongs, setSearchedSongs } = useSongs();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        setSongs(currentSong, song);
        setSearchedSongs(null);
        navigate("/");
      }}
      className="flex items-center gap-3 text-white bg-[#181818] cursor-pointer transition-all p-3 rounded-md hover:bg-[#282828]"
    >
      <img className="rounded-md" src={song.album.images[2].url} alt={songId} />
      <div>
        <p>{song.name}</p>
        <p className="text-[14px] text-[#A7A7A7]">{song.artists[0].name}</p>
      </div>
    </div>
  );
}

export default SearchedSongItem;
