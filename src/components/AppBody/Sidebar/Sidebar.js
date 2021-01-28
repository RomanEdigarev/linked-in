import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Roman Edigarev</h2>
        <h4>romanedigariev@yandex.ru</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,517</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,351</p>
        </div>
      </div>
      <div className="sidebar__buttom">
        <p>Recent</p>
      </div>
    </div>
  );
};
