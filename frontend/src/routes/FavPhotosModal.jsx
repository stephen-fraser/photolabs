import React from "react";
import PhotoFavButton from "components/PhotoFavButton";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import FavPhotoList from "components/PhotoList";

const FavPhotosModal = (props) => {
  const {
    toggleFavs,
    favs,
    sendModalPhotoData,
    isFavModalOpen,
    toggleFavModal,
    photos,
    toggleModal,
  } = props;

  const filterPhotosById = (photosArray) => {
    return photosArray.filter((photo) => favs.includes(photo.id));
  };

  const favPhotos = filterPhotosById(photos);

  return (
    <div className="photo-details-modal">
      {favPhotos.map((photo) => (
        <img key={photo.id} src={photo.urls.regular}></img>
      ))}
    </div>
  );
};

export default FavPhotosModal;
