function Song({ songImg, songName, songWriter }) {
  return (
    <div className="flex flex-col gap-3 bg-[#171717] py-8 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#282828]">
      <img
        className="w-[232px] h-[232px] rounded-md"
        src={songImg}
        alt="song-1"
      />
      <div className="">
        <p className="text-2xl font-semibold">{songName}</p>
        <p className="text-[#a7a7a7]">{songWriter}</p>
      </div>
    </div>
  );
}

export default Song;
