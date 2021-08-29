import React, { useState } from "react";
import "./TabsIfor.scss";

import Notifications from "./Notification/Notifications";
import Alert from "./Alert/Alert";
import Note from "./Note/Note";

import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export default function TabsInfor() {
  const [toggleClick, setToggleClick] = useState(1);

  const handleClickToggle = (index) => {
    console.log(index);
    setToggleClick(index);
  };

  return (
    <>
      <div className="container-tab">
        <div className="block-tabs">
          <div
            className={toggleClick === 1 ? "tab active-tab" : "tab"}
            onClick={() => handleClickToggle(1)}
          >
            Activities
          </div>
          <div
            className={toggleClick === 2 ? "tab active-tab" : "tab"}
            onClick={() => handleClickToggle(2)}
          >
            Note
          </div>
          <div
            className={toggleClick === 3 ? "tab active-tab" : "tab"}
            onClick={() => handleClickToggle(3)}
          >
            Alert
          </div>
        </div>
        <div className="tabs-content">
          <div
            className={toggleClick === 1 ? "content active-content" : "content"}
          >
            <Notifications />
          </div>
          <div
            className={toggleClick === 2 ? "content active-content" : "content"}
          >
            <Note />
          </div>
          <div
            className={toggleClick === 3 ? "content active-content" : "content"}
          >
            <Alert />
          </div>
        </div>
      </div>
      <div className="button-group">
        <div className="button-read">
          <DoneIcon />
          <p>Make all Read</p>
        </div>
        <div className="button__delete">
          <DeleteOutlineIcon />
          <p>Delete All</p>
        </div>
      </div>
    </>
  );
}
