import React, { useEffect, useState } from "react";
import LinkHome from "../../LinkHome/LinkHome";
import "./Revenue.scss";
import SearchIcon from "@material-ui/icons/Search";
import GetApp from "@material-ui/icons/GetApp";
import Axios from 'axios'

import RevenueWillPay from "./RevenueWillPay";
import RevenuePaid from "./RevenuePaid";
export default function Revenue({userId}) {
  const [paid, setPaid] = useState(false)
  const [dataPaid, setDataPaid] = useState()
  const [dataWill, setDataWill] = useState()
  const [valuePaidWeek, setValuePaidWeek] = useState(0)
  const [valuePaidMonth, setValuePaidMonth] = useState(0)
  const [valuePaidTotal, setValuePaidTotal] = useState(0)
  console.log(valuePaidMonth,valuePaidWeek,valuePaidTotal)
  const fetchValue = async()=>{
    const dataValuePaidWeek= await Axios.post('/api/renueve/week')
    const dataValuePaidMonth = await Axios.post('/api/renueve/month')
    const dataValuePaidTotal = await Axios.post('/api/renueve/total')
    setValuePaidTotal(dataValuePaidTotal.data.value)
    setValuePaidMonth(dataValuePaidMonth.data.value)
    setValuePaidWeek(dataValuePaidWeek.data.value)

  }
  const fetchData = async ()=>{
    const {data} = await Axios.get(`/api/order/${userId}`);
    
    const dataW = [];
    const dataP = [];
    for(let i = 0 ; i<data.length; i++){

      if(data[i].paymentStatus==='completed'){
        dataP.push(data[i])
      }
      else{
        dataW.push(data[i])
        
      }
    }
    setDataPaid(dataP);
    setDataWill(dataW);
  }
  useEffect(()=>{
   fetchData();
   fetchValue();
   
  },[])
  
  return (
    <>
      <LinkHome title="Revenue" />
      <div className="rev__container">
        <div className="rev__left-container">
          <div className="rev__left-top-container">
            <h3>General</h3>
            <div className="rev__left-top-container__center">
              <div className="rev__left-top-container__center__left">
                <h4>Will be pay</h4>
                <p>Total</p>
                <p>
                  $<span>0</span>
                </p>
              </div>
              <div className="rev__left-top-container__center__right">
                <div className="rev__rev__left-top-container__center__right-first">
                  <h4>Paid</h4>
                  <p>This week</p>
                  <p>
                    $<span>{valuePaidWeek}</span>
                  </p>
                </div>
                <div>
                  <p>This month</p>
                  <p>
                    $<span>{valuePaidMonth}</span>
                  </p>
                </div>
                <div>
                  <p>Total</p>
                  <p>
                    $<span>{valuePaidTotal}</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="rev__bank">
              My bank number: 1233213123<span>Account balance {">"}</span>
            </p>
          </div>

          <div className="rev__left-bottom-container">
            <div className="rev__left-bottom-container__title">
              <h3>Detail</h3>
              <div className="rev__left-bottom-container__title__search">
                <input placeholder="Search orders" />
                <SearchIcon id="search_icon" />
              </div>
            </div>
            <div className="rev__left-bottom-container__menu">
              <p className={paid?null:"rev__left-bottom-container__menu-active"} onClick={()=>setPaid(false)}>Will be pay</p>
              <p className={paid?"rev__left-bottom-container__menu-active":null} onClick={()=>setPaid(true)}>Paid</p>
            </div>
            <div>
              {
               
                paid? <RevenuePaid data={dataPaid}  />:<RevenueWillPay data={dataWill} />
              }
            </div>
          </div>
        </div>
        <div className="rev__right-container">
          <h3>Revenue Report<span>Watch more {'>'}</span></h3>
          <p>1/7/2021-1/8/2021 <span><GetApp /></span></p>
          <p>1/8/2021-1/9/2021<span><GetApp /></span></p>
          <p>1/9/2021-1/10/2021<span><GetApp /></span></p>
          <p>1/10/2021-1/11/2021<span><GetApp /></span></p>
          <p>1/12/2021-1/1/2022<span><GetApp /></span></p>
          
        </div>
      </div>
    </>
  );
}
