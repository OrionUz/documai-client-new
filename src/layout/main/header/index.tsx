import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "src/components/common/button";

function Header() {
  const [navigation, setNavigation] = useState(false);
  const changeNavigationBar = () => setNavigation(!navigation);

  const menu = (
    <>
      <Link to="/">Homepage</Link>
      <Link to="/about">About us</Link>
      <Link to="/news">Blog-News</Link>
      <Link to="/">Pricing</Link>
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
          <label
            htmlFor="navi-label"
            onClick={changeNavigationBar}
            className="header-navigation-label"
          >
            <span
              className={`header-navigation-icon ${
                navigation ? "header-navigation-icon-active" : ""
              }`}
            >
              &nbsp;
            </span>
          </label>
          <div
            className={`header-navigation-background ${
              navigation ? "header-navigation-background-active" : ""
            }`}
          >
            &nbsp;
          </div>
        </div>

        <nav
          className={`header-navigation-nav ${
            navigation ? "header-navigation-nav-active" : ""
          }`}
        >
          <ul className="header-navigation-list">{menu}</ul>
        </nav>

        <div className="header-right">
          {/* <Select
            defaultValue="en"
            style={{ width: 120 }}
            size="large"
            //   onChange={handleChange}
            options={languageOptions}
          /> */}
          <Link to="/dashboard">
            <CustomButton color="dark">Try Docum.ai</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
