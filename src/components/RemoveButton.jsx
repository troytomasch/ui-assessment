import React from "react";
import "../styles/RemoveButton.css";
import { useContext } from "react";
import { AlbumContext } from "../data/albumContext";

// Component to remove an album from the current display
const RemoveButton = (props) => {
  const { currentAlbums, setCurrentAlbums } = useContext(AlbumContext);
  const album = props.album;

  // Function to remove album from list
  const removeAlbum = () => {
    const index = currentAlbums.indexOf(album);
    let newAlbums = [];
    currentAlbums.splice(index, 1);
    for (let i of currentAlbums) {
      newAlbums.push(i);
    }
    setCurrentAlbums(newAlbums);
  };

  return (
    <h3
      className="Button"
      onClick={() => {
        removeAlbum();
      }}
    >
      X
    </h3>
  );
};

export default RemoveButton;
