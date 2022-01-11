import React, { useEffect } from "react";
import "./Revenue.scss";
import Menu from "@material-ui/icons/Menu";
import RevenueNoData from "./RevenueNoData";
import RevenueRow from "./RevenueRow";
export default function RevenuePaid({ data }) {
  
  return (
    <div className="revP__container">
      <div className="revP__paid">
        <label>From</label>
        <input
          type="date"
          value="2021-12-22"
          min="2018-01-01"
          max="2022-01-01"
        />
        <label>To</label>
        <input
          type="date"
          value="2021-12-29"
          min="2018-01-01"
          max="2022-02-01"
        />
        <div className="revP__paid__right">
          <p className="revP__paid__right__bor">Export</p>
          <Menu className="revP__paid__right__bor" />
        </div>
      </div>
      <div className="revP__first-row">
        <p>Orders</p>
        <p>Date pay</p>
        <p>Status</p>
        <p>Total</p>
      </div>
      <div className="revP__second-row">
        { (data&&data.length>0)? data?.map((x) => <RevenueRow data={x} />) : <RevenueNoData />}
      </div>
    </div>
  );
}
