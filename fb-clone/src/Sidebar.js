import ExpandMoreOutLined  from "@material-ui/icons/ExpandMoreOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import React from "react";

import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";


function Sidebar() {
  const [user,dispatch]= useStateValue();
  return (
    <div className="sidebar">
      
      <SidebarRow src={user.photoUrl} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutLined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
