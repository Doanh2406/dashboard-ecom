import React from "react";
import "./Notification.scss";
import Avatar from "@material-ui/core/Avatar";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: "#fff",
    backgroundColor: blue,
  },
}));
function Notification({ icon, title, time, colorIcon }) {
    const classes = useStyles();
  return (
    <div>
      <div className="tab-items">
        <div className="tab-item">
          <div className="tab-item__icon">
            <Avatar className={classes.green}>{icon}</Avatar>
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
