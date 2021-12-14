const API_KEY = "23670564-24f7dd7b8f7c27899fb90c8ea";

const BASE_URL = "https://pixabay.com/api";

const fetchAPI = async (query, page) => {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

export default fetchAPI;
