import React, { useContext } from "react";
import "../styles/RestoreAlbums.css";
import albums from "../data/albums.json";
import { AlbumContext } from "../data/albumContext";

const RestoreAlbums = () => {
  const { setCurrentAlbums } = useContext(AlbumContext);

  // Restores original albums
  const handleClick = () => {
    let allAlbums = [];
    for (let i of albums) {
      allAlbums.push(i);
    }
    setCurrentAlbums(allAlbums);
  };

  return (
    <h3
      className="RestoreAlbums"
      onClick={() => {
        handleClick();
      }}
    >
      Restore Albums
    </h3>
  );
};

export default RestoreAlbums;
