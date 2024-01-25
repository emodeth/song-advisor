function Song({ song, songId, handleClick }) {
  return (
    <div
      onClick={() => handleClick(songId)}
      className="flex flex-col gap-3 bg-[#171717] py-8 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#282828]"
    >
      <img
        className="w-[232px] h-[232px] rounded-md"
        src={song.album.images[0].url}
        alt={`song-${songId}`}
      />
      <div className="">
        <p className="text-2xl font-semibold">
          {song.name.length > 16 ? song.name.slice(0, 15) + "..." : song.name}
        </p>
        <p className="text-[#a7a7a7]">{song.artists[0].name}</p>
      </div>
    </div>
  );
}

export default Song;
