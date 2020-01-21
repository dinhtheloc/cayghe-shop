import React, { useState, useEffect } from 'react';
import chatIcon from './svg/chat-icon.svg';
import leftIcon from './svg/left-icon.svg';
import rightIcon from './svg/right-icon.svg';
import searchIcon from './svg/search-icon.svg';
import detailIcon from './svg/detail-icon.svg';
import radio from './svg/radio.svg';

import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import {
  Link
} from "react-router-dom";
import "./scss/styles.scss";
import "./scss/m-styles.scss";

import { numberFormat } from '../../../common/numberFormat';
import Loading from '../../../components/loading/loading';

export default function Login() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_KEY + "/get-list-products")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
          setProduct(result[0]);
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  function navigatorPrevious() {
    if (current > 0) {
      setCurrent(current - 1);
      setIsLoaded(true);
      setProduct(data[current - 1]);
    }
  }

  function navigatorNext() {
    if (current < data.length - 1) {
      setCurrent(current + 1);
      setIsLoaded(true);
      setProduct(data[current + 1]);
    }
  }

  const price = numberFormat(product.price || 0);
  return (
    <section id="section-1" className="section section-lg section-hero section-shaped">
      <video autoPlay loop id="video-background" muted >
        <source src="assets/background.mp4" type="video/mp4" />
      </video>
      <div className="card-header-loc">
        <div className="full-screen">
          {isLoaded ? <Loading></Loading> : ''}
          <img
            className="background-item" src={product.imageBackground}
            onLoad={() => setIsLoaded(false)}
          />
          <div className="more-icon">
            <img src={detailIcon}></img>
          </div>
          <a href="https://www.facebook.com/cegaystore/" target="_blank">
            <img className="logo-item" src={chatIcon}></img></a>
          <div className="content-text">
            <h4 className="display-4 mb-0 light shadow-text">{product.nameTitle}</h4>
            <h4 className="display-4 mb-0 shadow-text">'{product.nameDisplay}'</h4>
            <p className="price shadow-text">{price} VND</p>
          </div>
          <div className="add-item">
            <Link to={`/sneakers/${product.alias}`}>
              <img src={detailIcon}></img>
            </Link>
          </div>
        </div>
        <div className="child">
          <div className="d-flex justify-content-between">
            <div className="header-text">
              <h4 className="display-4 mb-0 light">Most</h4>
              <h4 className="display-4 mb-0">Popular</h4>
            </div>
            {/* <div className="d-flex justify-content-between pagination-icon">
              <div className="icon-left">
                <img src={leftIcon}></img>
              </div>
              <div className="icon-right">
                <img src={rightIcon}></img>
              </div>
            </div> */}
            
            <div className="search-item">
              <img src={searchIcon}></img>
            </div>
          </div>

          <div className="wrapper-list d-flex justify-content-between">
            {data.map((item, index) => (
              <div key={index}
                onClick={() => {
                  if (item.alias !== product.alias) {
                    setProduct(item);
                    setIsLoaded(true);
                  }
                }} className="card card-lift--hover border-0 card-product">
                {item.alias === product.alias ? (
                  <img className="choose" src={radio}></img>
                ) : ""}
                <img src={item.image} />
                <div className="content">
                  <h4 className="display-4 mb-0 light">{item.nameTitle}</h4>
                  <h4 className="display-4 mb-0">'{item.nameDisplay}'</h4>
                </div>
              </div>



            ))}
          </div>
        </div>
      </div>

      <div className="mobile">
        <div className="full-screen">
          {isLoaded ? <Loading></Loading> : ''}
          <img
            className="background-item" src={product.imageBackground}
            onLoad={() => setIsLoaded(false)}
          />
          {/* <div className="more-icon">
            <img src={detailIcon}></img>
          </div> */}
          <a href="https://www.facebook.com/cegaystore/" target="_blank">
            <img className="logo-item" src={chatIcon}></img></a>
          <div className="content-text">
            <h4 className="display-4 mb-0 light shadow-text">{product.nameTitle}</h4>
            <h4 className="display-4 mb-0 shadow-text">'{product.nameDisplay}'</h4>
            <p className="price shadow-text">{price} VND</p>
          </div>
          <div className="add-item">
            <Link to={`/sneakers/${product.alias}`}>
              <img src={detailIcon}></img>
            </Link>
          </div>
        </div>

        <Fab className="previous-action" size="medium" color="primary" aria-label="add">
          <NavigateBeforeIcon onClick={() => {
            navigatorPrevious();
          }}/>
        </Fab>
        <Fab className="next-action" size="medium" color="primary" aria-label="add">
          <NavigateNextIcon  onClick={() => {
            navigatorNext();
          }}/>
        </Fab>

      </div>

      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
  );
}