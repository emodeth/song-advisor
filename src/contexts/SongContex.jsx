import { createContext, useContext, useState } from "react";

const SongContext = createContext();

function SongProvider({ children }) {
  const [accessToken, setAccessToken] = useState();
  const [searchQuery, setSearchQuery] = useState();

  async function getSongs(searchQuery) {
    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=5&offset=0`,
      searchParameters
    );
    const data = await res.json();
    console.log(data);
  }

  return (
    <SongContext.Provider
      value={{ setAccessToken, searchQuery, setSearchQuery, getSongs }}
    >
      {children}
    </SongContext.Provider>
  );
}

function useSongs() {
  const context = useContext(SongContext);
  return context;
}

export { SongProvider, useSongs };
