import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const [selected, setSelected] = useState(false);
  const handleFav = () => setSelected(selected === false ? true : false);

  return (
    <div key={props.key} className="photo-list__item">
      <PhotoFavButton handleFav={handleFav} selected={selected} />
      <img className="photo-list__image" src={props.photo.imageSource}></img>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.profile}
        ></img>
        <div>
          <div className="photo-list__user-info">{props.photo.username}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
