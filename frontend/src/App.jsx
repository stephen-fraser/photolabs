import React from "react";
import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";

//Data
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { favs, isModalOpen, photoData },
    toggleFavs,
    toggleModal,
    sendPhotoData,
  } = useApplicationData();

  const isFav = (id) => favs.includes(id);
  const isFavPhotoExist = favs.length > 0;

  return (
    <div className="App">
      <HomeRoute
        toggleFavs={toggleFavs}
        isFav={isFav}
        isFavPhotoExist={isFavPhotoExist}
        toggleModal={toggleModal}
        sendPhotoData={sendPhotoData}
        photos={photos}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          photo={photoData}
          toggleFavs={toggleFavs}
          isFav={isFav}
          isFavPhotoExist={isFavPhotoExist}
        />
      )}
    </div>
  );
};

export default App;
