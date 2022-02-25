/** @format */

import React, {useState} from 'react';
import LinkHome from './../../LinkHome/LinkHome';
import './PredictSales.scss';
import Axios from 'axios';
import {useEffect} from 'react';

function PredictSales() {
  const [result, setResult] = useState();
  const [productName, setProductName] = useState();
  const [category, setCategory] = useState();
  const [publisher, setPublisher] = useState();
  const [userPoint, setUserPoint] = useState();
  const [criticPoint, setCriticPoint] = useState(5);
  const [rating, setRating] = useState(5);
  const [year, setYear] = useState();

  const handleOnclicPredict = async () => {
    // const dataA = {
    //   CONSOLE: productName,
    //   CATEGORY: category,
    //   RATING: rating,
    //   USER_POINT: Number.parseInt(userPoint),
    //   YEAR: Number.parseInt(year),
    //   PUBLISHER: publisher,
    //   CRITICS_POINT: criticPoint,
    // };
 

    async function fetchData() {
      const {data} = await Axios.post('http://127.0.0.1:8000/get_prediction', {
        CONSOLE: productName,
        CATEGORY: category,
        RATING: rating,
        USER_POINT: Number.parseInt(userPoint),
        YEAR: Number.parseInt(year),
        PUBLISHER: publisher,
        CRITICS_POINT: criticPoint,
      });
      console.log(data);
      setResult(data)

    }

    fetchData();
    //   axios({
    //     method: 'post',
    //     url: 'http://localhost:5000/get_prediction',
    //     data: dataJson
    // })
    // .then(function (response) {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    //  const js = axios.post(`http://localhost:5000/get_prediction`, { dataJson })
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     })
  };

  return (
    <div className='predict_layout'>
      <LinkHome title='Predict' className='predict_1' />
      <div className='predict_container'>
        <div className='predict_container_left'>
          <h3>PREDICT SALES</h3>
          <div className='predict_container_left_group'>
            <p>Product Name</p>
            <select onChange={(e) => setProductName(e.target.value)}>
              <option value='0'>Select Product Name</option>
              <option value='Eaton Computer Printout Paper, 8.5 x 11'>
                Eaton Computer Printout Paper, 8.5 x 11
              </option>
              <option value='Okidata Inkjet, Wireless'>
                Okidata Inkjet, Wireless
              </option>
              <option value='Hoover Microwave, White'>
                Hoover Microwave, White
              </option>
              <option value='Hewlett Wireless Fax, Laser'>
                Hewlett Wireless Fax, Laser
              </option>
              <option value='Novimex Swivel Stool, Set of Two'>
                Novimex Swivel Stool, Set of Two
              </option>
              <option value='Tenex Lockers, Blue'>Tenex Lockers, Blue</option>
              <option value='Acme Trimmer, High Speed'>
                Acme Trimmer, High Speed
              </option>
              <option value='Tenex Box, Single Width'>
                Tenex Box, Single Width
              </option>
            </select>
          </div>

          <div className='predict_container_left_group'>
            <p>Category</p>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value='0'>Select Category</option>
              <option value='Office Supplies'>Office Supplies</option>
              <option value='Furniture'>Furniture</option>
              <option value='Technology'>Technology</option>
            </select>
          </div>

          <div className='predict_container_left_group'>
            <p>Publisher</p>
            <select onChange={(e) => setPublisher(e.target.value)}>
              <option value='0'>Select publisher</option>
              <option value='OAPAC'>OAPAC</option>
              <option value='EU'>EU</option>
              <option value='EMEA'>EMEA</option>
              <option value='LATAM'>LATAM</option>
              <option value='US'>US</option>
              <option value='AFRICA'>AFRICA</option>
            </select>
          </div>

          <div className='predict_container_left_group'>
            <p>User Point</p>
            <select onChange={(e) => setUserPoint(e.target.value)}>
              <option value='0'>Select User Point</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>

          <div className='predict_container_left_group'>
            <p>Rating</p>
            <select onChange={(e) => setRating(e.target.value)}>
              <option value='0'>Select Rating</option>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
              <option value='D'>D</option>
              <option value='F'>F</option>
            </select>
          </div>

          <div className='predict_container_left_group'>
            <p>Year</p>
            <select onChange={(e) => setYear(e.target.value)}>
              <option value='0'>Select Year</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
            </select>
          </div>
        </div>
        <div className='predict_container_right'>
          <p>* Please fill in the information of the product to be predict.</p>
          <button onClick={handleOnclicPredict}>Predict</button>
          {result ? <p className='result'>Predicted Sales ~ {result.result} (Product)</p> : null}
        </div>
      </div>
    </div>
  );
}

export default PredictSales;
