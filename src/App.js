/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Post from "./components/Post";

import ReactLoading from "react-loading";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [photos, setPhotos] = useState(null);
  const [blur, setBlur] = useState(false);

  const toggleBlur = () => {
    setBlur(!blur);
  };

  useEffect(() => {
    Aos.init({ duration: 1200, offset: 100, delay: 300 });
    Aos.refresh();
  }, []);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=zFb9JRrtQmpRKW169NqZcsntRXYwNjrkcZDis3KH&count=20"
      );
      const data = await response.json();

      console.log(data);

      // store the data into our books variable
      setPhotos(data);
    }
  }, []);

  return (
    <div className="App">
      {photos ? (
        <div className="photos-loaded" data-aos="fade-in">
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-300 0 950 270"
          >
            <path
              d="M-314,267 C105,364 400,100 812,279"
              fill="none"
              stroke="white"
              strokeWidth="120"
              strokeLinecap="round"
            />
          </svg>

          <Header />

          <div className="posts-container">
            {photos.map((photo, index) => (
              <Post index={index} photo={photo} toggleBlur={toggleBlur} />
            ))}
          </div>
        </div>
      ) : (
        <div className="not-loaded">
          <div className="loading-container">
            <ReactLoading
              type={"bubbles"}
              color="rgb(226, 226, 226)"
              className="loading-icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
