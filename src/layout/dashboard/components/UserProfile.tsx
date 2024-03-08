import CustomPopover from "src/components/common/popover";
import Logout from "./Logout";
import { PROFILE } from "src/app/services/auth/const";

export const ProfileInfo = () => {
  const localData = localStorage.getItem(PROFILE);
  const userData = localData ? JSON.parse(localData) : undefined;
  return (
    <div className="profile-content-header">
      <div className="profile-content-header-img">
        <img src={require("src/assets/img/user.png")} alt="user" />
      </div>
      <div>
        <h3>{userData?.name}</h3>
        <p>{userData?.email}</p>
      </div>
    </div>
  );
};

function UserProfile() {
  const content = (
    <div className="profile-content">
      <ProfileInfo />
      <Logout />
    </div>
  );
  return (
    <CustomPopover content={content} trigger="click" placement="bottomRight">
      <div className="profile-button">
        <img src={require("src/assets/img/user.png")} alt="user" />
      </div>
    </CustomPopover>
  );
}

export default UserProfile;
