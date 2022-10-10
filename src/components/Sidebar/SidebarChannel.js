import sidebarChannelStyles from "./SidebarChannel.module.css";
const SidebarChannel = () => {
  return (
    <div className={sidebarChannelStyles.sidebarChannel}>
      <h4><span className={sidebarChannelStyles.sidebarChannelHash}>#</span>Learn</h4>
    </div>
  );
};

export default SidebarChannel;
