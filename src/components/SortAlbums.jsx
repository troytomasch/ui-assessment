import React from "react";
import { useContext } from "react";
import { AlbumContext } from "../data/albumContext";
import { sortByArtist, sortByTitle } from "../data/utilities";
import "../styles/SortAlbums.css";

// Dropdown component that sorts albums by artist or title
const SortAlbums = () => {
  const { currentAlbums, setCurrentAlbums } = useContext(AlbumContext);

  // Sorts albums accordingly
  const handleSelection = (value) => {
    let newAlbums = [];
    if (value === "artist") {
      let sortedAlbums = sortByArtist(currentAlbums);
      for (let i of sortedAlbums) {
        newAlbums.push(i);
      }
      setCurrentAlbums(newAlbums);
    } else if (value === "title") {
      let sortedAlbums = sortByTitle(currentAlbums);
      for (let i of sortedAlbums) {
        newAlbums.push(i);
      }
      setCurrentAlbums(newAlbums);
    }
  };

  return (
    <div className="SortAlbumsContainer">
      <label className="SortAlbumsLabel">Sort By: </label>
      <select
        onChange={(event) => {
          handleSelection(event.target.value);
        }}
        defaultValue={"default"}
        className="SortAlbumsSelect"
      >
        <option value="default" disabed="true" hidden>
          Select an option
        </option>
        <option value="artist">Artist</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortAlbums;
