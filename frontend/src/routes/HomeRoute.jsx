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
  } = props;

  const isFav = (id) => favs.includes(id);
  const isFavPhotoExist = favs.length > 0;

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
