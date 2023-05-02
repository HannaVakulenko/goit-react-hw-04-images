import axios from 'axios'; //Імпорт бібліотеки axios для HTTP-запитів

const BASE_URL = `https://pixabay.com/api/`;

const API_KEY = `34428593-ad2724277a9b2d94ab0c98dab`; // мій персональний ключ з Pixabay API

const IMAGE_ON_PAGE = 12;

export const imagesAPI = async (queryText, page) => {
  const queryParams = {
    params: {
      key: API_KEY,
      q: queryText,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: IMAGE_ON_PAGE,
    },
  };

  try {
    const response = await axios.get(BASE_URL, queryParams);
    const imagesAPI = await response.data;
    return imagesAPI;
  } catch (error) {
    throw new Error(error);
  }
};

//приклад запиту `${BASE_URL}?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGE_ON_PAGE}`
