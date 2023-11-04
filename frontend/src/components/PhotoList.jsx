import React from "react";

// Components
import PhotoListItem from "./PhotoListItem";

// SASS
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, toggleFavs, isFav, toggleModal, sendPhotoData } = props;
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavs={toggleFavs}
          isFav={isFav}
          toggleModal={toggleModal}
          sendPhotoData={sendPhotoData}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
