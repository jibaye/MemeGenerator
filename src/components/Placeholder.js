/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

const Placeholder = () => {
  const [memeImage, setmemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  
  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[random].url;
    setmemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setmemeImage((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          {" "}
          Get New Image
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} className="meme-image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
};

export default Placeholder;
