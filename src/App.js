import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import SortAlbums from "./components/SortAlbums";
import RestoreAlbums from "./components/RestoreAlbums";
import { AlbumContext } from "./data/albumContext";
import albums from "./data/albums.json";

function App() {
  // Avoiding the link between the albums in the json and the context for default sorting
  let defaultAlbums = [];
  for (let i of albums) {
    defaultAlbums.push(i);
  }

  // Used for the context to maintain albums across components
  const [currentAlbums, setCurrentAlbums] = useState(defaultAlbums);
  const value = { currentAlbums, setCurrentAlbums };

  return (
    <AlbumContext.Provider value={value}>
      <div className="App">
        <div className="Options">
          <SortAlbums />
          <RestoreAlbums />
        </div>
        <Layout />
      </div>
    </AlbumContext.Provider>
  );
}

export default App;
