import React from "react";
import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";

const App = () => {
  const {
    state: { favs, isModalOpen, modalPhotoData, photoData, topicData },
    toggleFavs,
    toggleModal,
    sendModalPhotoData,
    getPhotosByTopicId,
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
    </div>
  );
};

export default App;
