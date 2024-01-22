function Song({ songId, songImg, songName, songWriter, handleClick }) {
  return (
    <div
      onClick={() => handleClick(songId)}
      className="flex flex-col gap-3 bg-[#171717] py-8 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#282828]"
    >
      <img
        className="w-[232px] h-[232px] rounded-md"
        src={songImg}
        alt={`song-${songId}`}
      />
      <div className="">
        <p className="text-2xl font-semibold">{songName}</p>
        <p className="text-[#a7a7a7]">{songWriter}</p>
      </div>
    </div>
  );
}

export default Song;
