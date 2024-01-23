function SearchedSongItem({ songId, songImg, songName, songWriter }) {
  return (
    <div className="flex items-center gap-3 text-white bg-[#181818] cursor-pointer transition-all p-3 rounded-md hover:bg-[#282828]">
      <img className="rounded-md" src={songImg} alt={songId} />
      <div>
        <p>{songName}</p>
        <p className="text-[14px] text-[#A7A7A7]">{songWriter}</p>
      </div>
    </div>
  );
}

export default SearchedSongItem;
