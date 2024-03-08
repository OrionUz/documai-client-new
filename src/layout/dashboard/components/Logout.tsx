import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "src/app/slices/authSlice";
import { LogoutSvg } from "src/assets/svg";
import CustomPopconfirm from "src/components/common/popconfirm";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const {t} = useTranslation();
  return (
    <CustomPopconfirm
      title="Are you sure to log out from this platform?"
      okText="Yes"
      cancelText="No"
      placement="bottom"
      onConfirm={handleLogout}
    >
      <div className="profile-content-menu">
        <LogoutSvg />
        <h2>{t("dashboard.logout")}</h2>
      </div>
    </CustomPopconfirm>
  );
}

export default Logout;
