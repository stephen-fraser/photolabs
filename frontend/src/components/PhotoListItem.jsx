import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo, toggleFavs, isFav, toggleModal, sendModalPhotoData } = props;

  const handlePhotoClick = () => {
    sendModalPhotoData(photo);
    toggleModal();
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavs={toggleFavs} isFav={isFav} id={photo.id} />
      <img
        onClick={handlePhotoClick}
        className="photo-list__image"
        src={photo.urls.regular}
      ></img>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
        ></img>
        <div>
          <div className="photo-list__user-info">{photo.user.name}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
