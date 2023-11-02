import React from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
// import TopicList from "components/TopicList";
// import TopicListItem from "components/TopicListItem";
// import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {Array.from(Array(3)).map((_, index) => (
        <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
      ))} */}
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
