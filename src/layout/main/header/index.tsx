import { Select } from "antd";
import { Link } from "react-router-dom";
import { languageOptions } from "./const";
import CustomButton from "src/components/common/button";

function Header() {
  return (
    <div className="header">
      <div className="header-content container">
        <div className="header-logo">
          <Link to="/">Docum.ai</Link>
        </div>
        <div className="header-menu">
          <Link to="/">Homepage</Link>
          <Link to="/about">About us</Link>
          <Link to="/">Blog-News</Link>
          <Link to="/">Pricing</Link>
        </div>
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
