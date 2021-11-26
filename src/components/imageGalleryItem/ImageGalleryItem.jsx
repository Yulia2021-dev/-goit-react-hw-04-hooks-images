import React, { Component } from 'react';

import './imageGalleryItem.css'

import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class ImageGalleryItem extends Component {
  state = { isOpen: false };
  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <li key={id} className="imageGalleryItem"
          onClick={() => this.setState({ isOpen: true })}>
          <img
            src={webformatURL}
            alt={`pic-${id}`}
            className="imageGalleryItem-image"
          />
        </li>
        {isOpen && (
         <Lightbox
            mainSrc={largeImageURL}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  dataOriginal: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  source: PropTypes.string,
  description: PropTypes.string,
};

export { ImageGalleryItem };
