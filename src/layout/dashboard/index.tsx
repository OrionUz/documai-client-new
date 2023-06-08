import { Link, Outlet, useParams } from "react-router-dom";
import { BotSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";

function DashboardLayout() {
  const { botId } = useParams();
  const active = botId ? +botId : 1;

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div>
          <div className="dashboard-sidebar-top">
            <Link to="/">Docum.ai</Link>
          </div>
          <div className="dashboard-sidebar-content">
            <h3>Activated bots</h3>
            <div className="dashboard-sidebar-menu">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <Link
                    to={`/dashboard/bot/${item}`}
                    className={`dashboard-sidebar-bot ${
                      active === item && "dashboard-sidebar-bot-active"
                    }`}
                    key={item}
                  >
                    <BotSvg /> Mytaxi bot
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="dashboard-sidebar-footer">
          <CustomButton color="dark" bordered>
            Create new bot
          </CustomButton>
        </div>
      </div>
      <div className="dashboard-right">
        <div className="dashboard-header">
          <CustomButton color="dark" bordered>
            Balance: 25, 000
          </CustomButton>
          <img src={require("src/assets/img/user.png")} alt="user" />
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
