import React from "react";
import "./Notification.scss";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";


function Notification({ icon, title, time, status }) {

  const stringColor = `icon__color color-${status}`;
  return (
    <div>
      <div className="tab-items">
        <div className="tab-item">
          <div className="tab-item__icon">
            <div className={stringColor}>

              <div className="icon__colors">
              {icon}
              </div>
            </div>
          </div>
          <div className="tab-item__content">
            <span className="tab-item__title">{title}</span>
            <div className="tab-item__time">
              <QueryBuilderIcon className="tab-item__time-icon" />
              <span className="tab-item_clock">{time}</span>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Notification;
