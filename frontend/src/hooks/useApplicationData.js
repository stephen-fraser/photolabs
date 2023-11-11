import { useReducer, useEffect } from "react";
import axios from "axios";

// sets initial states for all states react is tracking
const initialState = {
  favs: [],
  isModalOpen: false,
  modalPhotoData: [],
  photoData: [],
  topicData: [],
  selectedTopic: null,
};

// declares action types for reducer switch statements and dispatches
const actionTypes = {
  TOGGLE_FAV: "TOGGLE_FAV",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_MODAL_PHOTO_DATA: "SET_MODAL_PHOTO_DATA",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
};

// defining reducer (for use in useReducer)
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAV:
      const isFav = state.favs.includes(action.id);
      // function to change favs - it searches the favs array for photo ids and adds or removes based on its presence
      return {
        ...state,
        favs: isFav
          ? state.favs.filter((fav) => fav !== action.id)
          : [...state.favs, action.id],
      };
    case actionTypes.TOGGLE_MODAL:
      // boolean for toggling modal
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case actionTypes.SET_MODAL_PHOTO_DATA:
      // sets the modal photo data
      return {
        ...state,
        modalPhotoData: action.modalPhotoData,
      };
    case actionTypes.SET_PHOTO_DATA:
      // sets all photo data visible on homepage
      return {
        ...state,
        photoData: action.payload,
      };
    case actionTypes.SET_TOPIC_DATA:
      // sets all topics visible in top navigation
      return {
        ...state,
        topicData: action.payload,
      };
    case actionTypes.SET_PHOTOS_BY_TOPIC:
      // filters view of photos based on selected topic
      return {
        ...state,
        selectedTopic: action.payload,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // helper function to add and remove photos from favourites
  const toggleFavs = (id) => {
    dispatch({ type: actionTypes.TOGGLE_FAV, id });
  };

  // helper function to toggle the boolean modal state
  const toggleModal = () => {
    dispatch({ type: actionTypes.TOGGLE_MODAL });
  };

  // helper function to send the photo object to be displayed in the modal
  const sendModalPhotoData = (photoObj) => {
    dispatch({
      type: actionTypes.SET_MODAL_PHOTO_DATA,
      modalPhotoData: photoObj,
    });
  };

  // if statement for stretch functionality to return to viewing all the photos by clicking on the PhotoLabs logo in top navigation
  const getPhotosByTopicId = (topicId) => {
    if (topicId === 0) {
      axios(`/api/photos`).then((response) =>
        dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: response.data })
      );
    } else {
      // changes the topicId state
      dispatch({
        type: actionTypes.SET_PHOTOS_BY_TOPIC,
        payload: topicId,
      });
    }
  };

  // use effect to perform side effects -  axios call
  // utilize promise all - this returned promise fulfills when all of the input's (axios get photo and axios get topics) promises fulfill
  // it rejects if either fail the catch will log the error - ensures both topics and photos load
  useEffect(() => {
    Promise.all([axios("/api/photos"), axios("/api/topics")])
      .then(([photoResponse, topicResponse]) => {
        dispatch({
          type: actionTypes.SET_PHOTO_DATA,
          payload: photoResponse.data,
        });
        dispatch({
          type: actionTypes.SET_TOPIC_DATA,
          payload: topicResponse.data,
        });
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
    // empty array so it only triggers on inital rendering
  }, []);

  // use effect to perfom side effects for axios call
  // axios call to view photos based on selected topic
  useEffect(() => {
    if (state.selectedTopic) {
      axios(`/api/topics/photos/${state.selectedTopic}`).then((response) =>
        dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: response.data })
      );
    }
    // triggered by a changed in selected topic
  }, [state.selectedTopic]);

  return {
    state,
    toggleFavs,
    toggleModal,
    sendModalPhotoData,
    getPhotosByTopicId,
  };
};

export { useApplicationData };
