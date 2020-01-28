import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Pagination from '../../node_modules/react-bootstrap/Pagination'

let active = 1;
let items = [];

for (let number = 1; number <= 10; number++) {
items.push(
  <Pagination.Item key={number} active={number === active}>
    {number}
  </Pagination.Item>,
);
}

export const ImageGrid = () => {
  const [images, setImages] = React.useState(null);
  const [loaded, setIsLoaded] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const firstdigit = number => {
    while (number >= 10) number /= 10;
    return number;
  };

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey =
      "04ef34af0d8524c97d17ff1bfe9e132596c0a4439229e6da1c3b8e0b31e9eb31";

    fetch(`${apiRoot}/photos/random?client_id=${accessKey}&count=20`)
      .then(response => {
        return response.json();
      })
      .then(res => {
        if (res[0].urls.thumb !== (null || "")) {
          var imageUrls = [];
          var data = {};
          for (var i = 0; i < 20; i++) {
            var widthNumber = res[i].width;
            var heightNumber = res[i].height;
            data = {
              src: res[i].urls.regular,
              width: firstdigit(widthNumber),
              height: firstdigit(heightNumber)
            };
            imageUrls.push(data);
          }
          setImages(imageUrls);
          setIsLoaded(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchImages();
  }, [ ]);

  return (
    <div className="container-fluid px-0 imageGrid">
      {loaded ? (
        <>
          <Gallery photos={images} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal className="modelbutton" onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={images.map(x => ({
                    srcset: x.srcSet,
                    caption: x.title,
                    ...x
                  }))}
                ></Carousel>
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <Pagination className="box">{items}</Pagination>
    </div>
  );
};
