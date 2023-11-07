import React from "react";

// Components
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

// SASS
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const {
    favs,
    topics,
    getPhotosByTopicId,
    getFavouritePhotos,
    toggleFavModal,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => getPhotosByTopicId(0)}>
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopicId={getPhotosByTopicId} />
      <FavBadge
        favs={favs}
        toggleFavModal={toggleFavModal}
        getFavouritePhotos={getFavouritePhotos}
      />
    </div>
  );
};

export default TopNavigation;
