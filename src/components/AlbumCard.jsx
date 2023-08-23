import React from "react";
import "../styles/AlbumCard.css";
import { getImageAlt } from "../data/utilities";
import RemoveButton from "./RemoveButton";

// Component for the card to display the album
const AlbumCard = (props) => {
  const album = props.album;
  const imageAlt = getImageAlt(album.artworkUrl);

  return (
    <div>
      <RemoveButton album={album} />
      <div>
        <div className="Card">
          <img
            className="AlbumArtwork"
            src={album.artworkUrl}
            alt={imageAlt}
          ></img>
          <div className="TitleAndArtist">
            <h1 className="AlbumTitle">{album.title}</h1>
            <h2 className="AlbumArtist">{album.artist}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
