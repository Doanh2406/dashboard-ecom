import React from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// import BiaxiaChart from '../../charts/BiaxiaChart'
import LineChart from "../../charts/LineChart";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./Dashboard.scss";
import Header from "../../Header/Header";
import Slide from "../../Slide/Slide";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__top">
        <div className="dashboard__top-left">
          <div className="dashboard__top-left__title">
            <span className="dashboard__top-left__title-text">Sales Chart</span>
            <HelpOutlineIcon color="primary" />
          </div>
          <div className="dashboard__top-left__layout">
            <div className="dashboard__top-left__layout-infor">
              <div className="dashboard__top-left__layout-text">
                <LocalMallIcon
                  style={{
                    fontSize: "36px",
                    marginRight: "10px",
                    color: "#05B171",
                  }}
                />
                <span>$10.552,40</span>
                <div className="layout-text__recent">
                  <ArrowUpwardIcon
                    style={{
                      fontSize: "30px",
                      marginLeft: "10px",
                      color: "#05B171",
                    }}
                  />
                  <span>8.3%</span>
                </div>
              </div>
              <div className="dashboard__layout-selects">
                <select className="dashboard__layout-select">
                  <option className="dashboard__layout-select__item" value="0">
                    January
                  </option>
                  <option className="dashboard__layout-select__item" value="1">
                    Febuary
                  </option>
                  <option className="dashboard__layout-select__item" value="2">
                    March
                  </option>
                  <option className="dashboard__layout-select__item" value="3">
                    April
                  </option>
                  <option className="dashboard__layout-select__item" value="5">
                    June
                  </option>
                  <option className="dashboard__layout-select__item" value="6">
                    July
                  </option>
                  <option className="dashboard__layout-select__item" value="7">
                    August
                  </option>
                  <option className="dashboard__layout-select__item" value="8">
                    September
                  </option>
                  <option className="dashboard__layout-select__item" value="9">
                    October
                  </option>
                  <option className="dashboard__layout-select__item" value="10">
                    November
                  </option>
                  <option className="dashboard__layout-select__item" value="11">
                    December
                  </option>
                  {/* <option value="12">Volvo</option> */}
                </select>
              </div>
            </div>
            {/* <LineChart /> */}
            <Slide/>
          </div>
        </div>
        <div className="dashboard__top-right">
          <div className="dashboard__top-left__title">
            <span className="dashboard__top-left__title-text">Channel</span>
            <HelpOutlineIcon color="primary" />
          </div>
          <div className="contenr-rights">
            
          </div>
        </div>
      </div>
      <div className="dashboard__mid"></div>
      <div className="dashboard__bottom"></div>
    </div>
  );
}
