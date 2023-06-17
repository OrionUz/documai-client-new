import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "src/app/services/auth";
import CustomButton from "src/components/common/button";

function AuthSignin() {
  const navigate = useNavigate();
  const [login, { isSuccess }] = useLoginMutation();

  if (isSuccess) navigate("/dashboard/document");

  return (
    <div className="auth-form">
      {/* <div className="auth-form-title">
        If you don’t have account please click to <Link to="/auth/signup">Create account!</Link>
      </div> */}

      {/* Auth with google */}
      <div className="auth-form-buttons">
        {/* <CustomButton
          // onClick={handleLogin}
          color="white"
          style={{ width: "100%" }}
        >
          <p>
            <img
              src={require("src/assets/img/google.png")}
              alt="google error"
            />{" "}
            Sign in with Google
          </p>
        </CustomButton> */}
        <GoogleLogin
          onSuccess={(credentialResponse: any) => {
            login({ token: credentialResponse.credential });
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          size="large"
          width="429px"
          locale="en"
          auto_select={false}
        />
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

export default AuthSignin;
