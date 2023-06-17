import { useState } from "react";
import { Link } from "react-router-dom";
import { getRootState } from "src/app/store";
import { pricingCardData } from "src/pages/home/const";
import CustomButton from "src/components/common/button";
import CustomModal from "src/components/common/modal";
import PricingCard from "src/pages/home/components/PricingCard";

function Header() {
  const [navigation, setNavigation] = useState(false);
  const changeNavigationBar = () => setNavigation(!navigation);

  const { isAuthenticated } = getRootState().auth;

  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const menu = (
    <>
      <Link to="/">Homepage</Link>
      <Link to="/about">About us</Link>
      <Link to="/news">Blog-News</Link>
      <p onClick={openModal}>Pricing</p>
    </>
  );
  return (
    <div className="header">
      <div className="header-content container">
        <div className="header-logo">
          <Link to="/">Docum.ai</Link>
        </div>
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
          <ul className="header-navigation-list" onClick={changeNavigationBar}>
            {menu}
          </ul>
        </nav>

        <div className="header-right">
          {/* <Select
            defaultValue="en"
            style={{ width: 120 }}
            size="large"
            //   onChange={handleChange}
            options={languageOptions}
          /> */}
          <Link to={isAuthenticated ? "/dashboard/document" : "/auth/signin"}>
            <CustomButton color="dark" bordered>
              Try Docum.ai
            </CustomButton>
          </Link>
        </div>
      </div>

      <CustomModal open={visible} onCancel={closeModal} width={1480}>
        {/* Pricing */}
        <section id="pricing" style={{ padding: 50 }}>
          <div className="title_sm" style={{ marginBottom: 24 }}>
            Сhoose a tariff for yourself or companies!
          </div>
          <div className="home-pricing">
            {pricingCardData.map((item) => {
              return <PricingCard item={item} />;
            })}
          </div>
        </section>
      </CustomModal>
    </div>
  );
}

export default Header;
