import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = (props) => {
  const { favs, toggleFavModal, getFavouritePhotos } = props;

  const isFavPhotoExist = favs.length > 0;

  return (
    <div
      className="fav-badge"
      onClick={() => {
        toggleFavModal();
      }}
    >
      {!isFavPhotoExist && (
        <FavIcon displayAlert={!!isFavPhotoExist} selected="selected" />
      )}
      {isFavPhotoExist && (
        <FavIcon displayAlert={!!isFavPhotoExist} selected="selected" />
      )}
    </div>
  );
};

export default FavBadge;
