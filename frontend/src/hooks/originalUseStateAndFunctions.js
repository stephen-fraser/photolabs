// all of this was originally on app.js

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
