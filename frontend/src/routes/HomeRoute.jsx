import React from "react";

//components
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

// SASS
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    toggleFavs,
    isFav,
    isFavPhotoExist,
    toggleModal,
    sendModalPhotoData,
    photos,
    topics,
    getPhotosByTopicId,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        isFavPhotoExist={isFavPhotoExist}
        topics={topics}
        getPhotosByTopicId={getPhotosByTopicId}
      />
      <PhotoList
        photos={photos}
        toggleFavs={toggleFavs}
        isFav={isFav}
        toggleModal={toggleModal}
        sendModalPhotoData={sendModalPhotoData}
      />
    </div>
  );
};

export default HomeRoute;
