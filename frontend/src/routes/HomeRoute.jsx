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
    sendPhotoData,
    photos,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        toggleFavs={toggleFavs}
        isFav={isFav}
        toggleModal={toggleModal}
        sendPhotoData={sendPhotoData}
      />
    </div>
  );
};

export default HomeRoute;
