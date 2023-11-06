import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  favs: [],
  isModalOpen: false,
  modalPhotoData: [],
  photoData: [],
  topicData: [],
  selectedTopic: null,
};

const actionTypes = {
  TOGGLE_FAV: "TOGGLE_FAV",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_MODAL_PHOTO_DATA: "SET_MODAL_PHOTO_DATA",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAV:
      const isFav = state.favs.includes(action.id);
      return {
        ...state,
        favs: isFav
          ? state.favs.filter((fav) => fav !== action.id)
          : [...state.favs, action.id],
      };
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case actionTypes.SET_MODAL_PHOTO_DATA:
      return {
        ...state,
        modalPhotoData: action.modalPhotoData,
      };
    case actionTypes.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case actionTypes.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case actionTypes.SET_PHOTOS_BY_TOPIC:
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

  const toggleFavs = (id) => {
    dispatch({ type: actionTypes.TOGGLE_FAV, id });
  };

  const toggleModal = () => {
    dispatch({ type: actionTypes.TOGGLE_MODAL });
  };

  const sendModalPhotoData = (photoObj) => {
    dispatch({
      type: actionTypes.SET_MODAL_PHOTO_DATA,
      modalPhotoData: photoObj,
    });
  };

  const getPhotosByTopicId = (topicId) => {
    dispatch({
      type: actionTypes.SET_PHOTOS_BY_TOPIC,
      payload: topicId,
    });
    console.log(state.selectedTopic);
  };

  useEffect(() => {
    axios("http://localhost:8001/api/photos").then((response) =>
      dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: response.data })
    );
    axios("http://localhost:8001/api/topics").then((response) =>
      dispatch({ type: actionTypes.SET_TOPIC_DATA, payload: response.data })
    );
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      axios(
        `http://localhost:8001/api/topics/photos/${state.selectedTopic}`
      ).then((response) =>
        dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: response.data })
      );
    }
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
