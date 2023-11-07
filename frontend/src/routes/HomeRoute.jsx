import React from "react";

//components
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

// SASS
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    toggleFavs,
    favs,
    toggleModal,
    sendModalPhotoData,
    photos,
    topics,
    getPhotosByTopicId,
    getFavouritePhotos,
    toggleFavModal,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        favs={favs}
        topics={topics}
        getPhotosByTopicId={getPhotosByTopicId}
        getFavouritePhotos={getFavouritePhotos}
        toggleFavModal={toggleFavModal}
      />
      <PhotoList
        photos={photos}
        toggleFavs={toggleFavs}
        favs={favs}
        toggleModal={toggleModal}
        sendModalPhotoData={sendModalPhotoData}
      />
    </div>
  );
};

export default HomeRoute;
