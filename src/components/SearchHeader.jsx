import { useNavigate } from "react-router-dom";
import InputSearch from "./InputSearch";

export default function SearchHeader() {
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    navigate(`/videos/${keyword}`);
  };

  return (
    <header className="w-full flex h-11 mt-2">
      <div>
        <img
          src="yt_logo_rgb_light.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
          className="h-full object-contain"
        />
      </div>
      <InputSearch onSearch={handleSearch} />
    </header>
  );
}
