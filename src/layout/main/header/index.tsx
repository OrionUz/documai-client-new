import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { changeNavigation } from "src/app/slices/headerSlice";
import { getRootState, useTypedSelector } from "src/app/store";
import { PricingSlider } from "src/pages/home";
import CustomButton from "src/components/common/button";
import CustomModal from "src/components/common/modal";
import Language from "../language";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

function Header() {
  const dispatch = useDispatch();
  const navigation = useTypedSelector((state) => state.header.navigation);
  const location = useLocation();
  const changeNavigationBar = () => dispatch(changeNavigation());
  const { t } = useTranslation();

  const { isAuthenticated } = getRootState().auth;

  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const menu = (
    <>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        {t("header.home")}
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        {t("header.about")}
      </Link>
      {/* <Link to="/news">Blog-News</Link> */}
      <p onClick={openModal}>{t("header.pricing")}</p>
    </>
  );
  return (
    <div className="header">
      <div className="header-content container">
       <Logo/>

        <div className="header-menu">{menu}</div>

        <div className="header-navigation">
          <label htmlFor="navi-label" onClick={changeNavigationBar} className="header-navigation-label">
            <span className={`header-navigation-icon ${navigation ? "header-navigation-icon-active" : ""}`}>
              &nbsp;
            </span>
          </label>
          <div className={`header-navigation-background ${navigation ? "header-navigation-background-active" : ""}`}>
            &nbsp;
          </div>
        </div>

        <nav className={`header-navigation-nav ${navigation ? "header-navigation-nav-active" : ""}`}>
          <Language />
          <ul className="header-navigation-list" onClick={changeNavigationBar}>
            {menu}
          </ul>
        </nav>

        <div className="header-right">
          <Language />
          <Link to={isAuthenticated ? "/dashboard/document" : "/auth/signin"}>
            <CustomButton color="dark" bordered>
              { t("header.try_docum")}
            </CustomButton>
          </Link>
        </div>
      </div>

      <CustomModal open={visible} onCancel={closeModal} width={1480}>
        {/* Pricing */}
        <section id="pricing" className="header-pricing-modal">
          <div className="title_sm" style={{ marginBottom: 24 }}>
            Сhoose a tariff for yourself or companies!
          </div>
          <div className="home-pricing">
            <PricingSlider />
          </div>
        </section>
      </CustomModal>
    </div>
  );
}

export default Header;
