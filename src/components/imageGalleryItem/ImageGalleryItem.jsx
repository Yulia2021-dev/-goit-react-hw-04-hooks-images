import React, { useState } from "react";

import "./imageGalleryItem.css";

import PropTypes from "prop-types";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li key={id} className="imageGalleryItem" onClick={() => setIsOpen(true)}>
        <img
          src={webformatURL}
          alt={`pic-${id}`}
          className="imageGalleryItem-image"
        />
      </li>
      {isOpen && (
        <Lightbox
          mainSrc={largeImageURL}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  dataOriginal: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  source: PropTypes.string,
  description: PropTypes.string,
};

export default ImageGalleryItem;
