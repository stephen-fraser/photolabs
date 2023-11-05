import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  favs: [],
  isModalOpen: false,
  modalPhotoData: [],
  photoData: [],
  topicData: [],
};

const actionTypes = {
  TOGGLE_FAV: "TOGGLE_FAV",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_MODAL_PHOTO_DATA: "SET_MODAL_PHOTO_DATA",
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
    default:
      return state;
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

  return {
    state,
    toggleFavs,
    toggleModal,
    sendModalPhotoData,
  };
};

export { useApplicationData };
