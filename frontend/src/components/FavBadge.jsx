import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      {!isFavPhotoExist && <FavIcon displayAlert={!!isFavPhotoExist} />}
      {isFavPhotoExist && (
        <FavIcon displayAlert={!!isFavPhotoExist} selected="selected" />
      )}
    </div>
  );
};

export default FavBadge;
