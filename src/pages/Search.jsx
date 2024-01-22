import SongButton from "../components/SongButton";
import Searchbar from "../components/Searchbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSongs } from "../contexts/SongContex";

const CLIENT_ID = "d02b8315f12045e382a4fb528590f28e";
const CLIENT_SECRET = "212257d604834f9caf97f09e58b3f003";

function Search() {
  const { songId } = useParams();
  const { setAccessToken } = useSongs();

  useEffect(function () {
    //get acces token
    async function getAccessToken() {
      const authParameters = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body:
          "grant_type=client_credentials&client_id=" +
          CLIENT_ID +
          "&client_secret=" +
          CLIENT_SECRET,
      };

      const res = await fetch(
        "https://accounts.spotify.com/api/token",
        authParameters
      );
      const data = await res.json();
      setAccessToken(data.access_token);
    }

    // search for query string

    getAccessToken();
  }, []);

  return (
    <div className="bg-[#121212] w-screen h-screen flex flex-col items-center p-6">
      <div className="w-1/4">
        <Searchbar />
      </div>
      <div className="mt-5 flex gap-3">
        <SongButton buttonId={1} activeButton={songId}>
          Song 1
        </SongButton>
        <SongButton buttonId={2} activeButton={songId}>
          Song 2
        </SongButton>
      </div>
    </div>
  );
}

export default Search;
