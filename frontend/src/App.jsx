import React from "react";
import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";

//Data
import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { favs, isModalOpen, modalPhotoData },
    toggleFavs,
    toggleModal,
    sendModalPhotoData,
  } = useApplicationData();

  // helpers (refactor later if time permits)
  const isFav = (id) => favs.includes(id);
  const isFavPhotoExist = favs.length > 0;

  return (
    <div className="App">
      <HomeRoute
        toggleFavs={toggleFavs}
        isFav={isFav}
        isFavPhotoExist={isFavPhotoExist}
        toggleModal={toggleModal}
        sendModalPhotoData={sendModalPhotoData}
        photos={photos}
        topics={topics}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          photo={modalPhotoData}
          toggleFavs={toggleFavs}
          isFav={isFav}
          isFavPhotoExist={isFavPhotoExist}
        />
      )}
    </div>
  );
};

export default App;
