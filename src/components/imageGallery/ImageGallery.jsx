import { ImageGalleryItem }   from '../imageGalleryItem/ImageGalleryItem';
import './imageGallery.css';

const ImageGallery = ({ result }) => {
  return (
    <ul className="gallery">
      {result.map(item => (
        <ImageGalleryItem
          key={item.id}
          id={item.id}
          largeImageURL={item.largeImageURL}
          webformatURL={item.webformatURL}
        />
      ))
      }
    </ul>
  );
 
};

export default ImageGallery;