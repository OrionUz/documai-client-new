import { Link } from "react-router-dom";
import CustomButton from "src/components/common/button";

function AuthSignUp() {
  return (
    <div className="auth-form">
      <div className="auth-form-title">
        If you have account please click to{" "}
        <Link to="/auth/signin">Log in!</Link>
      </div>

      {/* Auth with google */}
      <div className="auth-form-buttons">
        <CustomButton color="white" style={{ width: "100%" }}>
          <p>
            <img
              src={require("src/assets/img/google.png")}
              alt="google error"
            />{" "}
            Sign up with Google
          </p>
        </CustomButton>
        {/* <CustomButton icon={<AppleSvg />} style={{ width: "100%" }} left_icon>
          Sign up with Google
        </CustomButton> */}
      </div>

      {/* Another option */}
      {/* <div className="auth-form-option">
        <div />
        <p>or</p>
        <div />
      </div> */}
    </div>
  );
}

export default AuthSignUp;
