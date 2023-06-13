import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { BotSvg, HomeSvg, QuestionSvg } from "src/assets/svg";
import { dashboardHeaderButtons } from "./const";
import CustomButton from "src/components/common/button";
import RadioButton from "src/components/common/radio/RadioButton";
import UserCard from "./components/UserCard";

function DashboardLayout() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  const location = useLocation();
  const type = location.pathname.split("/")[2];

  const { botId } = useParams();
  const active = botId ? +botId : 1;

  const handleChangeHeader = (val: string) => {
    navigate(`/dashboard/${val}`);
  };

  return (
    <div className="dashboard">
      <div className={"dashboard-sidebar"}>
        <div>
          {/* Sidebar top */}
          <div className="dashboard-sidebar-top">
            <div className="dashboard-sidebar-top-title">
              <Link to="/"> Docum.ai</Link>
            </div>

            <div className="dashboard-sidebar-top-menu">
              <Link to="/">
                <HomeSvg /> <span>Home</span>
              </Link>
              <p>
                <QuestionSvg /> <span>Help</span>
              </p>
            </div>
          </div>

          {/* List of bots */}
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

        {/* Button for create new bot */}
        <div className="dashboard-sidebar-footer">
          <CustomButton color="dark" bordered>
            Create new bot
          </CustomButton>
        </div>
      </div>

      {/* List of users */}
      {type === "chat" && (
        <div className="dashboard-users">
          <div className="dashboard-users-header">
            <h2>45 Участников</h2>
          </div>
          <div className="dashboard-users-content">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <UserCard
                  item={item}
                  active={userId && +userId === item ? true : false}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Right section of dashboard */}
      <div className="dashboard-right">
        {/* Header of dashboard */}
        <div className="dashboard-header">
          <CustomButton color="dark" bordered>
            Balance: 25, 000
          </CustomButton>
          <img src={require("src/assets/img/user.png")} alt="user" />
        </div>

        {/* Content of dashboard */}
        <div className="dashboard-content">
          <div className="dashboard-content-header">
            <RadioButton
              onChange={handleChangeHeader}
              defaultValue={type || "document"}
              buttons={dashboardHeaderButtons}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
