import sidebarStyles from "./Sidebar.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import { Call, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarTop}>
        <h3>Learn Languages</h3>
        <ExpandMoreIcon />
      </div>
      <div className={sidebarStyles.sidebarChannels}>
        <div className={sidebarStyles.sidebarChannelsHeader}>
          <div className={sidebarStyles.sidebarHeader}>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon
            // onClick={handleAdd}
            className={sidebarStyles.sidebarAddChannel}
          />
        </div>
        <div className={sidebarStyles.sidebarChannelsList}>
          <SidebarChannel />
        </div>
      </div>
      <div className={sidebarStyles.sidebarVoice}>
        <SignalCellularAlt
          className={sidebarStyles.sidebarVoiceIcon}
          fontSize="large"
        />
        <div className={sidebarStyles.sidebarVoiceInfo}>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
          <div className={sidebarStyles.sidebarVoiceIcons}>
          <InfoOutlined />
          <Call />
        </div>
      </div>
        <div className={sidebarStyles.sidebarProfile}>
        <Avatar />
        <div className={sidebarStyles.sidebarProfileInfo}>
          <h3>zmoney20</h3>
          <p>#userID</p>
        </div>
          <div className={sidebarStyles.sidebarProfileIcons}>
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
