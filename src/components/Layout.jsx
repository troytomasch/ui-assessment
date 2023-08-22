import React, { useContext } from "react";
import "../styles/Layout.css";
import AlbumCard from "./AlbumCard";
import { AlbumContext } from "../data/albumContext";

// Component for the main layout of the albums
const Layout = () => {
  const { currentAlbums } = useContext(AlbumContext);

  return (
    <div className="Layout">
      {currentAlbums.map((album) => {
        return <AlbumCard album={album} key={album.title} />;
      })}
    </div>
  );
};

export default Layout;
