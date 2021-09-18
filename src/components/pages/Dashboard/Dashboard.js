import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import GetAppIcon from '@material-ui/icons/GetApp';
import AllInboxIcon from '@material-ui/icons//AllInbox';
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import React, { useEffect, useState } from "react";
// import BiaxiaChart from '../../charts/BiaxiaChart'
import LineChart from "../../charts/LineChart";
import {
  LineChart as LineChart2,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  CartesianAxis,
  BarChart,
  Bar,
  Legend,
  LabelList
} from "recharts";
import Products from "../Products/Products";
import "./Dashboard.scss";
import TableDashboard from "./TableDashboard";
import RecentReview from "./RecentReview";
const data = [
  {
    name: "22/9",
    uv: 100,

  },
  {
    name: "23/9",
    uv: 300,

  },
  {
    name: "24/9",
    uv: 200,

  },
  {
    name: "25/9",
    uv: 278,

  },
  {
    name: "26/9",
    uv: 189,

  },
  {
    name: "27/9",
    uv: 239,

  },
  {
    name: "28/9",
    uv: 229,

  }
];

export default function Dashboard() {

  return (
    <div className="dashboard">

      <div className="dashboard__top">
        <div className="dashboard__top-left l-7 m-12 c-12">
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
            <LineChart />
            {/* <Slide/> */}
          </div>
        </div>
        <div className="dashboard__top-right l-4 m-12 c-12 ">
          <div className="dashboard__top-left__title">
            <span className="dashboard__top-left__title-text">Channel</span>
            <HelpOutlineIcon color="primary" />
          </div>
          <div className="contenr-rights">

          </div>
        </div>
      </div>
      <div className="dashboard__mid">

      </div>
      <div className="dashboard__bottom">


      </div>

      {/* nhat */}
      <div className='dashboard_row'>
        <div className='dashboard_card'>
          <div className='dashboard_card_title'>
            <ShoppingBasketIcon style={{ fontSize: 50, color: '#ff6e40' }} />
            <p style={{ marginLeft: 'auto', marginTop: -10 }}>...</p>
          </div>
          <div className='dashboard_card_title'>
            <div >
              <p style={{ marginTop: -10, fontWeight: 600 }}>Orders</p>
              <p style={{ marginTop: -10, fontWeight: 600 }}>310</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -20, fontSize: 14, color: '#05b171' }}>
                <p>Overlast month 1.14%</p>
                <ArrowUpwardIcon />
              </div>

            </div>
            <div style={{ marginLeft: 'auto' }}>
              <LineChart2
                height={150}
                width={250}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >

                <Line type="monotone" dataKey="uv" stroke="#25c2e3" />
              </LineChart2>
            </div>
          </div>
        </div>

        <div className='dashboard_card'>
          <div className='dashboard_card_title'>
            <LoyaltyIcon style={{ fontSize: 50, color: '#ff6e40' }} />
            <p style={{ marginLeft: 'auto', marginTop: -10 }}>...</p>
          </div>
          <div className='dashboard_card_title'>
            <div >
              <p style={{ marginTop: -10, fontWeight: 600 }}>Sales</p>
              <p style={{ marginTop: -10, fontWeight: 600 }}>$31220</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -20, fontSize: 14, color: '#05b171' }}>
                <p>Overlast month 1.14%</p>
                <ArrowUpwardIcon />
              </div>

            </div>
            <div style={{ marginLeft: 'auto' }}>
              <LineChart2
                height={150}
                width={250}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >

                <Line type="monotone" dataKey="uv" stroke="#9932e7" />
              </LineChart2>
            </div>
          </div>
        </div>

        <div className='dashboard_card'>
          <div className='dashboard_card_title'>
            <p style={{ marginTop: 0, fontWeight: 600 }}>Recent Review</p>
            <p style={{ marginLeft: 'auto', marginTop: 0, fontSize: 14, color: '#ff6e40' }}>View all</p>
          </div>

          <RecentReview />


        </div>
      </div>

      <div className='dashboard_row'>
        <div className='dashboard_card'>

          <div className='dashboard_card_title'>
            <p style={{ marginTop: -0, fontSize: 20, fontWeight: 600 }}>Customer Rating</p>

            <p style={{ marginLeft: 'auto', marginTop: -10 }} >...</p>



          </div>
          <div className='dashboard_card_center'>
            <p style={{ marginTop: -10, fontSize: 30, fontWeight: 600 }}>3.0</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -20 }}>
              <StarIcon style={{ color: 'yellow' }} />
              <StarIcon style={{ color: 'yellow' }} />
              <StarIcon style={{ color: 'yellow' }} />
              <StarIcon />
              <StarIcon />
              <p style={{ marginLeft: 10 }}>(318)</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <ArrowUpwardIcon style={{ fontSize: 18, color: '#05b171' }} />
              <p style={{ color: '#05b171', marginRight: 10 }}> +35</p>
              <p > Point from last month</p>

            </div>
            <div style={{ height: 150, }}>

              <LineChart2
                height={150}
                width={250}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >

                <Line type="monotone" dataKey="uv" stroke="#05b171" />
              </LineChart2>

            </div>
            <div className='dashboard_btn_down'>
              <GetAppIcon style={{ fontWeight: 400, marginTop: 3, marginRight: 10 }} />
              <p>Download Report</p>
            </div>
          </div>
          <div style={{ height: 30 }} />
        </div>

        <div style={{ backgroundColor: '#9932e7', opacity: 0.7, color: '#fff' }} className='dashboard_card'>
          <div className='dashboard_card_center'>
            < AllInboxIcon style={{ fontSize: 50 }} />
            <p style={{ fontWeight: 600, fontSize: 24, marginTop: 10 }}>Product Sold</p>
            <p style={{ fontSize: 20, marginTop: -20 }}>89 Sold</p>

            <div style={{ marginTop: 30 }}>
              <BarChart
                width={500}
                height={250}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >

                <XAxis stroke='#fff' dataKey="name" />


                <Bar dataKey="uv" fill='#fff' >
                  <LabelList stroke='#fff' dataKey="uv" position="top" />
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>

        <div className='dashboard_card'>
          <div className='dashboard_card_title'>
            <p style={{ marginTop: 0, fontWeight: 600 }}>Your Top Country</p>
            <p style={{ marginLeft: 'auto', marginTop: 0, fontSize: 14, color: '#ff6e40' }}>View all</p>
          </div>
          <div style={{ marginTop: 10 }} className='dashboard_card_title'>
            <img style={{ width: 100, height: 60, borderRadius: 5, marginRight: 20 }} alt='' src='http://localhost:5000/upload/flags/VN.png' />
            <p style={{}}>Viet Nam</p>

            <p style={{ marginLeft: 'auto', fontSize: 16, }}>$9999</p>
          </div>
          <div style={{ marginTop: 10 }} className='dashboard_card_title'>
            <img style={{ width: 100, height: 60, borderRadius: 5, marginRight: 20 }} alt='' src='http://localhost:5000/upload/flags/Laos.png' />
            <p style={{}}>Laos</p>

            <p style={{ marginLeft: 'auto', fontSize: 16, }}>$1239</p>
          </div>
          <div style={{ marginTop: 10 }} className='dashboard_card_title'>
            <img style={{ width: 100, height: 60, borderRadius: 5, marginRight: 20 }} alt='' src='http://localhost:5000/upload/flags/usa.png' />
            <p style={{}}>USA</p>

            <p style={{ marginLeft: 'auto', fontSize: 16, }}>$1329</p>
          </div>
          <div style={{ marginTop: 10 }} className='dashboard_card_title'>
            <img style={{ width: 100, height: 60, borderRadius: 5, marginRight: 20 }} alt='' src='http://localhost:5000/upload/flags/Rus.png' />
            <p style={{}}>Russia</p>

            <p style={{ marginLeft: 'auto', fontSize: 16, }}>$2129</p>
          </div>
          <div style={{ marginTop: 10 }} className='dashboard_card_title'>
            <img style={{ width: 100, height: 60, borderRadius: 5, marginRight: 20 }} alt='' src='http://localhost:5000/upload/flags/VN.png' />
            <p style={{}}>Viet Nam</p>

            <p style={{ marginLeft: 'auto', fontSize: 16, }}>$1</p>
          </div>
        </div>
      </div>


      <div className='dashboard_row'>
        <div style={{ width: '37%' }}>
          <h3 style={{ marginTop: -5 }}>Activity</h3>
          <div className='dashboard_row'>
            <div className='dashboard_card_but'>
              <LocalShippingOutlinedIcon style={{ color: '#9932e7' }} className='db_card_icon' />
              <h3>Delivered</h3>
              <p style={{ marginTop: -10, opacity: 0.7 }}>15 New Packages</p>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div style={{ height: 5, backgroundColor: '#9932e7', width: '20%', borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
                <div style={{ height: 5, backgroundColor: '#6c757d', opacity: 0.4, width: '80%', borderTopRightRadius: 3, borderBottomRightRadius: 3 }} />

              </div>
            </div>
            <div className='dashboard_card_but'>
              <ListAltOutlinedIcon style={{ color: '#ff6e40' }} className='db_card_icon' />
              <h3 >Ordered</h3>
              <p style={{ marginTop: -10, opacity: 0.7 }}>72 New Items</p>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div style={{ height: 5, backgroundColor: '#ff6e40', width: '30%', borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
                <div style={{ height: 5, backgroundColor: '#6c757d', opacity: 0.4, width: '70%', borderTopRightRadius: 3, borderBottomRightRadius: 3 }} />

              </div>
            </div>
          </div>
          <div className='dashboard_row'>
            <div className='dashboard_card_but'>
              <BarChartOutlinedIcon style={{ color: '#25c2e3' }} className='db_card_icon' />
              <h3>Reported</h3>
              <p style={{ marginTop: -10, opacity: 0.7 }}>50 Support New Cases</p>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div style={{ height: 5, backgroundColor: '#25c2e3', width: '500%', borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
                <div style={{ height: 5, backgroundColor: '#6c757d', opacity: 0.4, width: '500%', borderTopRightRadius: 3, borderBottomRightRadius: 3 }} />

              </div>
            </div>
            <div className='dashboard_card_but'>
              <NearMeOutlinedIcon style={{ color: '#05b171' }} className='db_card_icon' />
              <h3>Arrived</h3>
              <p style={{ marginTop: -10, opacity: 0.7 }}>34 Upgraded Box</p>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div style={{ height: 5, backgroundColor: '#05b171', width: '60%', borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
                <div style={{ height: 5, backgroundColor: '#6c757d', opacity: 0.4, width: '40%', borderTopRightRadius: 3, borderBottomRightRadius: 3 }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: '61.7%' }}>
          <h3 style={{ marginTop: -5 }}>Recent Prodouct</h3>
          <div className='dashboard_table'>
            <TableDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
