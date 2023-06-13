import { Outlet, useLocation } from "react-router-dom";

function AuthPage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <div className="auth">
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
            <h3>{path === "signin" ? "Sign in" : "Sign up"}</h3>
            <h2>
              Integrating AI into your business unlocks a world of possibilities
            </h2>
          </div>
          <div className="auth-right-img">
            <img
              src={require("src/assets/img/home/home.png")}
              alt="error home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
