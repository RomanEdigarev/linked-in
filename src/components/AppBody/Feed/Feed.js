import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import { InputOption } from "./InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">

        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventIcon} title="Event" color="#c0cbcd" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
        </div>

      </div>
    </div>
  );
};
