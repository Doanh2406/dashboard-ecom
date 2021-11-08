import React, { useState } from "react";
import "./Slide.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const data = [
  "https://vetra.laborasyon.com/assets/images/products/5.jpg",
  "https://vetra.laborasyon.com/assets/images/products/2.jpg",
  "https://vetra.laborasyon.com/assets/images/products/1.jpg",
  "https://vetra.laborasyon.com/assets/images/products/4.jpg",
  "https://vetra.laborasyon.com/assets/images/products/3.jpg",
  "https://vetra.laborasyon.com/assets/images/products/5.jpg",
];
function Slide() {
  const [selectImg, setSelectImg] = useState(data[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  // const [currentLeft, setCurrentLeft] = useState(0);
  // const [currentRight, setCurrentRight] = useState(3);

  const handleBack = (select) => {
    let vardump = data.findIndex((x) => x === select);
    if (vardump - 1 > -1) {
      setSelectImg(data[vardump - 1]);
      setCurrentIndex(vardump-1)
    } else {
      vardump = data.length;

      setSelectImg(data[vardump]);
      setCurrentIndex(vardump)
    }
    console.log(vardump);
  };

  const handleForward = (select) => {
    let vardump = data.findIndex((x) => x === select);
    console.log(vardump)
    if (vardump + 1 < data.length) {
      setSelectImg(data[vardump + 1]);
      setCurrentIndex(vardump+1)
    } else {
      vardump = 0;
      setSelectImg(data[vardump]);
      setCurrentIndex(vardump)
    }
    console.log(vardump);
  };

  const handleCurent = (item) => {
    setSelectImg(item);
    // console.log(currentIndex);
    let indexImge = data.findIndex((x) => x === item);
    if (indexImge > 0 && indexImge < data.length) {
      setCurrentIndex(indexImge);
    } else {setCurrentIndex(1);
    }
  };

  return (
    <div className="slide-image">
      <div className="big-image">
        <div className="big-image__item">
          <div
            className="big-image__icon"
            onClick={() => handleBack(selectImg)}
          >
            <ArrowBackIosIcon />
          </div>
          <img alt='' className="big-image__img" src={selectImg}></img>
          <div
            className="big-image__icon"
            onClick={() => handleForward(selectImg)}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      <div className="small-image">
        <div className="big-image__icon" onClick={() => handleBack(selectImg)}>
          <ArrowBackIosIcon />
        </div>
        <div className="small-image__item">
          {data.slice(currentIndex - 1, currentIndex + 2).map((img, index) => (
            <img
              alt=''
              key={index}
              style={{ border: selectImg === img ? "4px solid purple" : "" }}
              className="small-image__img"
              src={img}
              onClick={() => handleCurent(img)}
            ></img>
          ))}
        </div>
        <div
          className="big-image__icon"
          onClick={() => handleForward(selectImg)}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Slide;
