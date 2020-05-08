import React, { useState, useEffect } from "react";
import { ImageGrid } from "./ImageGrid";

export const firstdigit = (number) => {
  while (number >= 10) number /= 10;
  return number;
};

export const UnsplashImages = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [imagesJSON, setImagesJSON] = useState(null);
  const [searchValue, setSearchValue] = useState("models");

  useEffect(() => {
    const client_id =
      "04ef34af0d8524c97d17ff1bfe9e132596c0a4439229e6da1c3b8e0b31e9eb31";
    const query = searchValue;

    fetch(
      `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(`respose from unsplash ${res}`);
        if (res.results[0].urls.thumb !== (null || "")) {
          var imageUrls = [];
          var data = {};
          for (var i = 0; i < 10; i++) {
            var widthNumber = res.results[i].width;
            var heightNumber = res.results[i].height;
            data = {
              src: res.results[i].urls.regular,
              width: firstdigit(widthNumber),
              height: firstdigit(heightNumber),
            };
            imageUrls.push(data);
          }
          setLoaded(true);
          setImagesJSON(imageUrls);
        }
      })
      .catch((err) => {
        console.log("error in fetching unsplash:->", err);
        return err;
      });
  }, [searchValue]);

  return (
    <div className="container-fluid px-0 imageGrid">
      {loaded ? (
        <ImageGrid images={imagesJSON} />
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
