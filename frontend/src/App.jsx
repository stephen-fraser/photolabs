import React from "react";
import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import FavPhotosModal from "routes/FavPhotosModal";
import { useApplicationData } from "hooks/useApplicationData";

const App = () => {
  const {
    state: {
      favs,
      isModalOpen,
      modalPhotoData,
      photoData,
      topicData,
      isFavModalOpen,
    },
    toggleFavs,
    toggleModal,
    sendModalPhotoData,
    getPhotosByTopicId,
    getFavouritePhotos,
    toggleFavModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toggleFavs={toggleFavs}
        favs={favs}
        toggleModal={toggleModal}
        sendModalPhotoData={sendModalPhotoData}
        photos={photoData}
        topics={topicData}
        getPhotosByTopicId={getPhotosByTopicId}
        getFavouritePhotos={getFavouritePhotos}
        toggleFavModal={toggleFavModal}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          photo={modalPhotoData}
          toggleFavs={toggleFavs}
          favs={favs}
        />
      )}
      {isFavModalOpen && (
        <FavPhotosModal
          isFavModalOpen={isFavModalOpen}
          toggleFavModal={toggleFavModal}
          photos={photoData}
          toggleFavs={toggleFavs}
          favs={favs}
          toggleModal={toggleModal}
          sendModalPhotoData={sendModalPhotoData}
          topics={topicData}
          getPhotosByTopicId={getPhotosByTopicId}
          getFavouritePhotos={getFavouritePhotos}
        />
      )}
    </div>
  );
};

export default App;
