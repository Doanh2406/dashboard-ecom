import React, { useEffect, useState } from "react";
import "./ShopProductsDetail.scss";
import LinkHome from "../../LinkHome/LinkHome";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Description from "./Description";
import Review from "./Review";
import SSS from "./SSS";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { addToCart } from "../../redux/actions/cartActions";
import { getReview } from "../../redux/actions/reviewActions";
import { useParams } from "react-router";

export default function ShopProductsDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, product } = useSelector(
    (state) => state.productDetail
  );
  const cart = useSelector((state) => state.getCart);
  const [tab, setTab] = useState(1);
  const [photos, setPhotos] = useState(0);
  const [addCart, setAddCart] = useState();
  const [rating, setRating] = useState(0);
  const [countRating, setCountRating] = useState(0);
  const userSignin = useSelector((state) => state.userSignIn);
  console.log(product);
  useEffect(() => {
    fetchData();
    if (cart.cart && product) {
      cart.cart.find((x) => (x.product === id ? setAddCart(x.qty) : null));
    }
  }, [dispatch]);
  useEffect(()=>{
    ratingRound();
  },[])
  async function fetchData() {
    dispatch(getReview(id));
  }
  function ratingRound() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    setRating(getRandomInt(5));
    setCountRating(getRandomInt(1000));
  }
  const handleArrow = (n) => {
    if (n > product.productPicture.length - 1) {
      setPhotos(0);
      return;
    }
    if (n < 0) {
      setPhotos(product.productPicture.length - 1);
      return;
    }
    setPhotos(n);
  };
  const handleAdd = async () => {
    dispatch(addToCart(id, addCart, userSignin.userInfo._id));
  };


  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <p>error</p>
      ) : (
        <div className="spd_container">
          <LinkHome title="Products Detail" />
          <div className="spd_fr_container">
            <div className="spd_fr_fc">
              <div className="spd_fr_fc_fr">
                <div
                  className="spd_arrow"
                  onClick={() => handleArrow(photos - 1)}
                >
                  <ChevronLeftIcon />
                </div>
                <img
                  src={
                    "http://localhost:5000/upload/product/" +
                    product.productPicture[photos]?.img
                  }
                  alt=""
                />
                <div
                  className="spd_arrow"
                  onClick={() => handleArrow(photos + 1)}
                >
                  <ChevronRightIcon />
                </div>
              </div>
              <div className="spd_fr_fc_sr">
                <div
                  className="spd_arrow"
                  onClick={() => handleArrow(photos - 1)}
                >
                  <ChevronLeftIcon />
                </div>

                <img
                  className="spd_photo_active"
                  src={
                    "http://localhost:5000/upload/product/" +
                    product.productPicture[photos]?.img
                  }
                  alt=""
                />

                {product.productPicture.length > 1 && (
                  <img
                    className="spd_photo"
                    src={
                      photos + 1 === product.productPicture.length
                        ? "http://localhost:5000/upload/product/" +
                          product.productPicture[0].img
                        : "http://localhost:5000/upload/product/" +
                          product.productPicture[photos + 1].img
                    }
                    alt=""
                  />
                )}
                {product.productPicture.length > 2 && (
                  <img
                    className="spd_photo"
                    src={
                      photos + 2 === product.productPicture.length
                        ? "http://localhost:5000/upload/product/" +
                          product.productPicture[0].img
                        : photos + 1 === product.productPicture.length
                        ? "http://localhost:5000/upload/product/" +
                          product.productPicture[1].img
                        : "http://localhost:5000/upload/product/" +
                          product.productPicture[photos + 2].img
                    }
                    alt=""
                  />
                )}
                {product.productPicture.length > 3 && (
                  <img
                    className="spd_photo"
                    src={
                      photos + 3 === product.productPicture.length
                        ? "http://localhost:5000/upload/product/" +
                          product.productPicture[0].img
                        : photos + 2 === product.productPicture.length
                        ? "http://localhost:5000/upload/product/" +
                          product.productPicture[1].img
                        : photos + 1 === product.productPicture.length
                        ? "http://localhost:5000/upload/product/" +
                          product.productPicture[2].img
                        : "http://localhost:5000/upload/product/" +
                          product.productPicture[photos + 3].img
                    }
                    alt=""
                  />
                )}

                <div
                  className="spd_arrow"
                  onClick={() => handleArrow(photos + 1)}
                >
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
            <div className="spd_fr_sc">
              <div className="spd_fr_sc_title">
                {true ? (
                  <div style={{ marginLeft: "auto" }}>
                    <FavoriteIcon style={{ color: "red", fontSize: 18 }} />
                  </div>
                ) : (
                  <div style={{ marginLeft: "auto" }}>
                    <FavoriteBorderIcon
                      style={{ color: "red", fontSize: 18 }}
                    />
                  </div>
                )}
              </div>
              <p
                style={{
                  marginTop: 0,
                  marginLeft: "auto0",
                  color: "black",
                  fontWeight: 590,
                  fontSize: 32,
                }}
              >
                {product.name}
              </p>
              {product.variant[0]?.inventoryQly > 0 ? (
                <p className="spd_stock">
                  {" "}
                  In Stock ({product.variant[0]?.inventoryQly}){" "}
                </p>
              ) : (
                <p className="spd_stock">Out of stock</p>
              )}
              <p>{product.sdescription}</p>

              <div style={{ marginTop: -20 }} className="spd_fr_sc_price">
                <p>${product.variant[0]?.price}</p>
              </div>
              <div className="spd_fr_sc_star">
                {rating < 1 && <StarIcon style={{ color: "#ffb400" }} />}
                {rating < 2 && <StarIcon style={{ color: "#ffb400" }} />}
                {rating < 3 && <StarIcon style={{ color: "#ffb400" }} />}
                {rating < 4 && <StarIcon style={{ color: "#ffb400" }} />}
                {rating < 5 && <StarIcon style={{ color: "#ffb400" }} />}

                {rating > 0 && <StarIcon />}
                {rating > 1 && <StarIcon />}
                {rating > 2 && <StarIcon />}
                {rating > 3 && <StarIcon />}
                {rating > 4 && <StarIcon />}

                {Number(rating) === rating && rating % 1 !== 0 && (
                  <StarHalfIcon style={{ color: "#ffb400" }} />
                )}
                {countRating && (
                  <p style={{ marginLeft: 10 }}>({countRating})</p>
                )}
              </div>
              <p>Feartures:</p>
              <p>{product.fearture}</p>
            </div>
          </div>
          <div className="spd_sr_container">
            <div className="spd_sr_fr">
              <p
                className={tab === 1 ? "spd_active" : "spd_btn"}
                onClick={() => setTab(1)}
              >
                Descriptions
              </p>
              <p
                className={tab === 2 ? "spd_active" : "spd_btn"}
                onClick={() => setTab(2)}
              >
                Review
              </p>
              <p
                className={tab === 3 ? "spd_active" : "spd_btn"}
                onClick={() => setTab(3)}
              >
                SSS
              </p>
            </div>
            <div
              style={{ width: "100%", backgroundColor: "#dbdbdb", height: 1 }}
            />
            {tab === 1 ? (
              <Description des={product.description} />
            ) : tab === 2 ? (
              <Review
                productId={product._id}
                user={userSignin.userInfo}
                review={product.review}
              />
            ) : (
              <SSS />
            )}
          </div>
          <div style={{ height: 30 }} />
        </div>
      )}
    </>
  );
}
