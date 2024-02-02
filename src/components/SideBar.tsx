import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGenreList from "../hooks/useGenreList";
import croppedImgUrl from "../services/img-cropping";
import useGameQueryStore from "../store";

const SideBar = () => {
  let navigate = useNavigate();

  const [activeGenreId, setActiveGenreId] = useState<number | null>(null);

  const { isLoading, error, data } = useGenreList();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <span className="loading loading-spinner text-warning loading-lg"></span>
    );

  const handleButtonClick = (genreId: number) => {
    setActiveGenreId(genreId);
    setGenreId(genreId);
    navigate("/");
  };

  return (
    <div className="app-sidebar">
      <h2 className="text-lg text-slate-100 font-bold px-3 py-4">Categories</h2>
      <ul>
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className={`flex px-3 py-2 ${
              activeGenreId === genre.id ? "active" : ""
            }`}
            onClick={() => handleButtonClick(genre.id)}
          >
            <img
              className="w-7 mr-2"
              src={croppedImgUrl(genre.image_background)}
            />
            <p>{genre.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
