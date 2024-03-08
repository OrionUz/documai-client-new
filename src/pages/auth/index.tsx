import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import Header from "src/layout/main/header";

function AuthPage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const {t} = useTranslation();

  return (
    <div className="auth">
      <Header />
      <div className="blur_purple" />
      <div className="blur_red" />
      <div className="blur_blue" />
      <div className="auth-content">
        <div className="auth-left">
          <div className="auth-left-content">
            <Outlet />
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-right-header">
            <h3>{path === "signin" ? t("sign.sign") : t("sign.signUp")}</h3>
            <h2>{t("sign.text")}</h2>
          </div>
          <div className="auth-right-img">
            <img src={require("src/assets/img/home/home.png")} alt="error home" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
