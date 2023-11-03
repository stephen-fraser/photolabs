import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

//Data
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // moved favourite photo state to global at App
  const [favs, setFavs] = useState([]);

  // helper function to change favs state based onClick
  // it searches the favs array for photo ids and adds or removes based on what it finds
  const toggleFavs = (id) => {
    if (favs.includes(id)) {
      return setFavs([...favs].filter((x) => x !== id));
    }

    setFavs([...favs, id]);
  };

  // helper function to set selected based on the state of favs (returns boolean)
  const isFav = (id) => favs.includes(id);
  // helper variable to send down as a prop to determine if there are any liked photos (returns boolean)
  const isFavPhotoExist = favs.length > 0;

  // boolean variable for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen); // ? true : false);

  const [photoData, setPhotoData] = useState([]);

  const sendPhotoData = (photoObj) => {
    setPhotoData(photoObj);
  };

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
          photos={photoData}
          toggleFavs={toggleFavs}
          isFav={isFav}
          isFavPhotoExist={isFavPhotoExist}
        />
      )}
    </div>
  );
};

export default App;
