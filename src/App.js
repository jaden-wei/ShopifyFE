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
  const [dateInput, setDateInput] = useState("");
  const [searchedImage, setSearchedImage] = useState(null);

  const toggleBlur = () => {
    setBlur(!blur);
  };

  function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  }

  useEffect(() => {
    Aos.init({ duration: 1200, offset: 100, delay: 300 });
    Aos.refresh();
  }, []);

  useEffect(() => {
    const getRandomData = async () => {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=zFb9JRrtQmpRKW169NqZcsntRXYwNjrkcZDis3KH&count=20"
      );
      const data = await response.json();

      setPhotos(data);
    };

    getRandomData();
  }, []);

  useEffect(() => {
    const getDataFromInput = async (s) => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=zFb9JRrtQmpRKW169NqZcsntRXYwNjrkcZDis3KH&date=${dateInput}`
      );

      const data = await response.json();

      setSearchedImage(data);
    };

    if (dateInput != null && isValidDate(dateInput)) {
      getDataFromInput();
    } else {
      setSearchedImage(null);
    }
  }, [dateInput]);

  return (
    <div className="App">
      {photos ? (
        <div c lassName="photos-loaded">
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

          <Header dateInput={dateInput} setDateInput={setDateInput} />

          <div className="posts-container">
            {searchedImage ? (
              <Post
                photo={searchedImage}
                toggleBlur={toggleBlur}
                searched={true}
                setDateInput={setDateInput}
              />
            ) : (
              <></>
            )}
            {photos.map((photo, index) => (
              <Post index={index} photo={photo} toggleBlur={toggleBlur} />
            ))}
          </div>
        </div>
      ) : (
        <div className="not-loaded">
          <div className="loading-container">
            <div>
              <h1 className="loading-header">Loading</h1>
              <ReactLoading
                type={"bubbles"}
                color="rgb(226, 226, 226)"
                className="loading-icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
