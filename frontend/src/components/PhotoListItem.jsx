import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const [selected, setSelected] = useState(false);
  const handleFav = () => setSelected(selected === false ? true : false);

  return (
    <div className="photo-list__item">
      <PhotoFavButton handleFav={handleFav} selected={selected} />
      <img className="photo-list__image" src={props.photo.urls.regular}></img>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
        ></img>
        <div>
          <div className="photo-list__user-info">{props.photo.user.name}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
