import { useSongs } from "../contexts/SongContex";

function DeleteButton() {
  const { setSearchQuery } = useSongs();

  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      className="Svg-sc-ytk21e-0 dYnaPI mOLTJ2mxkzHJj6Y9_na_ absolute top-4 right-4 w-4 h-4 z-50"
      viewBox="0 0 16 16"
      fill="currentColor"
      onClick={() => setSearchQuery("")}
    >
      <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}

export default DeleteButton;
