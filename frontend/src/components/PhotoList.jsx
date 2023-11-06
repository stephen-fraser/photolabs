import React from "react";

// Components
import PhotoListItem from "./PhotoListItem";

// SASS
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, toggleFavs, favs, toggleModal, sendModalPhotoData } = props;
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavs={toggleFavs}
          favs={favs}
          toggleModal={toggleModal}
          sendModalPhotoData={sendModalPhotoData}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
