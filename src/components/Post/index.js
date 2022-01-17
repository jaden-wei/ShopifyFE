import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./styles.css";

function Post({ index, photo }) {
  const [enlarged, setEnlarged] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div
      key={index}
      className="img-container"
      enlarged={enlarged}
      data-aos="fade-up"
    >
      <div
        className="blur"
        onClick={() => {
          setEnlarged((enlarged + 1) % 2);
        }}
        enlarged={enlarged}
      ></div>
      <div className="post-container" enlarged={enlarged}>
        <img
          className={"photo"}
          src={photo.url}
          alt={""}
          onError={(e) => (e.target.parentElement.style.display = "none")}
          onClick={() => {
            setEnlarged((enlarged + 1) % 2);
          }}
          enlarged={enlarged}
        />
        <div className="img-info" enlarged={enlarged}>
          <div className="post-description-header">
            {photo.copyright ? (
              <h4>{photo.title + " - " + photo.copyright}</h4>
            ) : (
              <h4>{photo.title}</h4>
            )}
            {liked ? (
              <AiFillHeart
                className={liked ? "heart wobble" : "heart"}
                onClick={() => {
                  setLiked(!liked);
                }}
              />
            ) : (
              <AiOutlineHeart
                className={liked ? "heart wobble" : "heart"}
                onClick={() => {
                  setLiked(!liked);
                }}
              />
            )}
          </div>
          <p>{photo.explanation}</p>
        </div>
      </div>

      <p className="img-label" enlarged={enlarged}>
        {photo.date}
      </p>
    </div>
  );
}

export default Post;
