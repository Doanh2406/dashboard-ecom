import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./TabsIfor.scss";

import Notifications from "./Notification/Notifications";
import Alert from "./Alert/Alert";
import Note from './Note/Note';

export default function TabsInfor({ action }) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static" className="app_bar">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Actives" className="app_bar-tab" />
          <Tab label="Notes" />
          <Tab label="Alert" />
        </Tabs>
      </AppBar>
      
      {selectedTab === 0 && (<>
      <Notifications />
      <div className="button-group">
        <button className="button__read"> Make all read</button>
        <button className="button__delete">Delete All</button>
      </div>
      </>
      )}
      {selectedTab === 1 && <Note />}
      {selectedTab === 2 && <Alert />}
    </>
  );
}
