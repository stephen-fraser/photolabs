import React from "react";

//components
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

// SASS
import "../styles/HomeRoute.scss";

//Data
import photos from "mocks/photos";

const HomeRoute = (props) => {
  const { toggleFavs, isFav, isFavPhotoExist } = props;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} toggleFavs={toggleFavs} isFav={isFav} />
    </div>
  );
};

export default HomeRoute;
