import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  favs: [],
  isModalOpen: false,
  modalPhotoData: [],
  photoData: [],
  topicData: [],
  selectedTopic: null,
  isFavModalOpen: false,
};

const actionTypes = {
  TOGGLE_FAV: "TOGGLE_FAV",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_MODAL_PHOTO_DATA: "SET_MODAL_PHOTO_DATA",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
  TOGGLE_FAV_MODAL: "TOGGLE_FAV_MODAL",
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
    case actionTypes.TOGGLE_FAV_MODAL:
      console.log("test");
      return {
        ...state,
        isFavModalOpen: !state.isFavModalOpen,
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

  const toggleFavModal = () => {
    dispatch({ type: actionTypes.TOGGLE_FAV_MODAL });
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
    if (topicId === 0) {
      axios(`/api/photos`).then((response) =>
        dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: response.data })
      );
    } else {
      dispatch({
        type: actionTypes.SET_PHOTOS_BY_TOPIC,
        payload: topicId,
      });
    }
  };

  const getFavouritePhotos = (favs) => {
    const filterPhotosById = (photosArray) => {
      return photosArray.filter((photo) => favs.includes(photo.id));
    };

    axios(`/api/photos`)
      .then((response) => {
        const favPhotos = filterPhotosById(response.data);
        console.log(response.data);
        console.log(favPhotos);
        return favPhotos;
      })
      .then((favPhotos) => {
        dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: favPhotos.data });
        console.log(favPhotos.data);
      })
      .catch((error) => {
        console.error("Error fetching favourite photos:", error);
      });
  };

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
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      axios(`/api/topics/photos/${state.selectedTopic}`).then((response) =>
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
    getFavouritePhotos,
    toggleFavModal,
  };
};

export { useApplicationData };
