import { useReducer } from "react";

// Define the initial state
const initialState = {
  favs: [],
  isModalOpen: false,
  photoData: [],
};

// Define action types
const actionTypes = {
  TOGGLE_FAV: "TOGGLE_FAV",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
};

// Define the reducer function
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
    case actionTypes.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.photoData,
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

  const sendPhotoData = (photoObj) => {
    dispatch({ type: actionTypes.SET_PHOTO_DATA, photoData: photoObj });
  };

  return {
    state,
    toggleFavs,
    toggleModal,
    sendPhotoData,
  };
};

export { useApplicationData };
