import { Link } from "react-router-dom";
import { isDocum } from "src/static/const";

function Logo() {
  return (
    <Link to="/">
      <img className="logo" src={require(`../../../assets/img/logo${isDocum ? "" : "2"}.png`)} alt="logo img error" />
    </Link>
  );
}

export default Logo;
