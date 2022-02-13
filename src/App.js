import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import SearchBar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery.jsx";
import Button from "./components/button/Button.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import fetchAPI from "./fetchAPI";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState("idle");
  const [page, setPage] = useState(1);

  const onLoadMoreClick = async () => {
    if (searchQuery !== "") {
      setStatus("pending");

      onFetchImages(
        page,
        onErrorNoImages(searchQuery),
        onErrorNoMoreImages(searchQuery)
      ).then(({ hits }) => {
        if (hits.length === 0) {
          throw new Error(onErrorNoImages(searchQuery));
        }

        if (hits.length < 12) {
          setResult([...result, ...hits]);
          throw new Error(onErrorNoMoreImages(searchQuery));
        }

        setStatus("resolved");
        setResult([...result, ...hits]);
        incrementPage();
      });
    }
  };

  const incrementPage = () => setPage(page + 1);
  const resetPage = () => setPage(1);

  const onFetchImages = async (
    page,
    emptyResultErrorMessage,
    shortResultErrorMessage
  ) => {
    try {
      return await fetchAPI(searchQuery, page);
    } catch (error) {
      toast.error(error.message);
      setStatus("idle");
    }
  };

  const onErrorNoImages = (query) =>
    `No images found for "${query}". Try again.`;
  const onErrorNoMoreImages = (query) => `No more images found for "${query}".`;

  const handleFormSubmit = (query) => {
    setSearchQuery(query);
    setResult([]);
    resetPage();
  };

  const update = () => {
    if (searchQuery !== "") {
      setResult([]);
      setStatus("pending");

      onFetchImages(
        page,
        onErrorNoImages(searchQuery),
        onErrorNoMoreImages(searchQuery)
      ).then((data) => {
        try {
          const { hits } = data;
          if (hits.length === 0) {
            throw new Error(onErrorNoImages(searchQuery));
          }

          if (hits.length < 12) {
            setResult([...result, ...hits]);
            throw new Error(onErrorNoMoreImages(searchQuery));
          }

          setStatus("resolved");
          setResult([...result, ...hits]);
          incrementPage();

          window.scrollBy({ top: 1000, behavior: "smooth" });
        } catch (error) {
          toast.error(error.message);
          setStatus("idle");
        }
      });
    }
  };

  useEffect(() => update(), [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery result={result} />
      {status === "resolved" && <Button onClick={onLoadMoreClick} />}
      {status === "pending" && (
        <Loader
          type="ThreeDots"
          color="#995471"
          width={100}
          style={{ textAlign: "center" }}
        />
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
