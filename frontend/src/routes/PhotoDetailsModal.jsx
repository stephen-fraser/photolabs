import React from "react";
import PhotoFavButton from "components/PhotoFavButton";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { toggleModal, toggleFavs, favs, photo, sendModalPhotoData } = props;
  const isFav = (id) => favs.includes(id);

  return (
    <div className="photo-details-modal">
      <button
        onClick={toggleModal}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton toggleFavs={toggleFavs} isFav={isFav} id={photo.id} />
        <img className="photo-details-modal__image" src={photo.urls.full}></img>
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
          ></img>
          <div className="photo-details-modal__photographer-info">
            {photo.user.name}
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(photo.similar_photos)}
            toggleFavs={toggleFavs}
            favs={favs}
            toggleModal={() => {}}
            sendModalPhotoData={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
