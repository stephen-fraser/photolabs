import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
// import PhotoList from "components/PhotoList";
// import TopNavigation from "components/TopNavigationBar";
// import TopicList from "components/TopicList";
// import TopicListItem from "components/TopicListItem";
// import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

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

  return (
    <div className="App">
      {/* {Array.from(Array(3)).map((_, index) => (
        <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
      ))} */}
      <HomeRoute
        toggleFavs={toggleFavs}
        isFav={isFav}
        isFavPhotoExist={isFavPhotoExist}
      />
    </div>
  );
};

export default App;
