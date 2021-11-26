import { Component } from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import SearchBar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery.jsx";
import Button from "./components/button/Button.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchAPI from "./servises/fetchAPI";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    status: "idle",
    result: [],
    showModal: false,
    largeImage: null,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (searchQuery !== prevState.searchQuery) {
      this.setState({
        result: [],
        status: "pending",
      });

      this.onFetchImages(
        1,
        this.onErrorNoImages(searchQuery),
        this.onErrorNoMoreImages(searchQuery)
      );
    }
  }

  onLoadMoreClick = async () => {
    const { page, searchQuery } = this.state;
    this.setState({
      status: "pending",
    });

    this.onFetchImages(
      page,
      this.onErrorNoMoreImages(searchQuery),
      this.onErrorNoMoreImages(searchQuery)
    );
  };

  onFetchImages = async (
    pageQuery,
    emptyResultErrorMessage,
    shortResultErrorMessage
  ) => {
    const { searchQuery } = this.state;

    try {
      const { hits } = await fetchAPI(searchQuery, pageQuery);

      if (hits.length === 0) {
        throw new Error(emptyResultErrorMessage);
      }

      if (hits.length < 12) {
        this.setState((prevState) => ({
          result: [...prevState.result, ...hits],
        }));
        throw new Error(shortResultErrorMessage);
      }

      this.setState((prevState) => ({
        status: "resolved",
        result: [...prevState.result, ...hits],
        page: pageQuery + 1,
      }));
      window.scrollBy({ top: 1000, behavior: "smooth" });
    } catch (error) {
      toast.error(error.message);
      this.setState({ status: "idle" });
    }
  };

  onErrorNoImages(query) {
    return `No images found for "${query}". Try again.`;
  }
  onErrorNoMoreImages(query) {
    return `No more images found for "${query}".`;
  }

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  toggleModal = (largeImage) => {
    this.setState((prevState) => ({
      largeImage,
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { result, status } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery result={result} />
        {status === "resolved" && <Button onClick={this.onLoadMoreClick} />}
        {status === "pending" && (
          <Loader
            type="ThreeDots"
            color="#995471"
            width={100}
            style={{ textAlign: "center" }}
          />
        )}
        {/* {showModal && (
          <Modal largeImage={largeImage} onClick={this.toggleModal} />
        )} */}
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    );
  }
}

export default App;
