import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img className="logo" src={require("../../../assets/img/logo.png")} alt="logo img error" />
    </Link>
  );
}

export default Logo;
