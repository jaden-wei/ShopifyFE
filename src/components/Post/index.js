import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./styles.css";

function Post({ index, photo, searched, setDateInput }) {
  const [enlarged, setEnlarged] = useState(0);
  const [liked, setLiked] = useState(false);

  console.log(photo);

  useEffect(() => {
    if (searched) {
      setEnlarged(1);
    }
  }, []);

  if (photo.media_type !== "image") {
    return <></>;
  }

  return (
    <div key={index} className="img-container" enlarged={enlarged}>
      <div
        className="blur"
        onClick={() => {
          setEnlarged((enlarged + 1) % 2);
          setDateInput("");
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
            setDateInput("");
          }}
          enlarged={enlarged}
        />
        <div className="img-info" enlarged={enlarged}>
          <div className="post-description-header">
            {photo.copyright ? (
              <a href={photo.url}>{photo.title + " - " + photo.copyright}</a>
            ) : (
              <a href={photo.url}>{photo.title}</a>
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
