import React from "react";
import PhotoFavButton from "components/PhotoFavButton";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { toggleModal, toggleFavs, isFav, photos } = props;

  return (
    <div className="photo-details-modal">
      <button
        onClick={toggleModal}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton toggleFavs={toggleFavs} isFav={isFav} id={photos.id} />
        <img
          className="photo-details-modal__image"
          src={photos.urls.full}
        ></img>
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photos.user.profile}
          ></img>
          <div className="photo-details-modal__photographer-info">
            {photos.user.username}
            <div className="photo-details-modal__photographer-location">
              {photos.location.city}, {photos.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(photos.similar_photos)}
            toggleFavs={toggleFavs}
            isFav={isFav}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
