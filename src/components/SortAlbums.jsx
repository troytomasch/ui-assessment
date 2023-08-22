import React from "react";
import { useContext } from "react";
import { AlbumContext } from "../data/albumContext";
import { sortByArtist, sortByTitle } from "../data/utilities";

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
    <div>
      <label>Sort By: </label>
      <select
        onChange={(event) => {
          handleSelection(event.target.value);
        }}
        defaultValue={"default"}
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
