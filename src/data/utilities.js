// Gets the alt value given the url of the image
const getImageAlt = (imageUrl) => {
  const lastSlash = imageUrl.lastIndexOf("/");
  const imageAlt = imageUrl.substr(lastSlash + 1);

  return imageAlt;
};

// Sorts the provided albums by artist
const sortByArtist = (albums) => {
  const compare = (a, b) => {
    if (a.artist < b.artist) {
      return -1;
    } else {
      return 1;
    }
  };

  return albums.sort(compare);
};

// Sorts the provided albums by title
const sortByTitle = (albums) => {
  const compare = (a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  };

  return albums.sort(compare);
};

module.exports = { getImageAlt, sortByArtist, sortByTitle };
