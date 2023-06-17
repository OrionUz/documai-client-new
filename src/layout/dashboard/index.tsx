import { useEffect } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useGetProjectsQuery } from "src/app/services/projects";
import { saveProjects } from "src/app/slices/projectSlice";
import { useAppDispatch } from "src/app/store";
import { BotSvg, HomeSvg, QuestionSvg } from "src/assets/svg";
import { dashboardHeaderButtons } from "./const";
import CustomButton from "src/components/common/button";
import RadioButton from "src/components/common/radio/RadioButton";
import AddProject from "./components/AddProject";
import ProjectUsers from "./components/ProjectUsers";

function DashboardLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Use search params
  const [searchParams, setSearchParams] = useSearchParams();
  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  //Menu
  const projectId = searchParams.get("projectId");
  const activeProject = projectId ? +projectId : 1;

  const location = useLocation();
  const type = location.pathname.split("/")[2];

  const handleChangeHeader = (val: string) => {
    navigate(`/dashboard/${val}?projectId=${projectId}`);
  };

  //Get projects
  const { data } = useGetProjectsQuery();
  useEffect(() => {
    if (data) dispatch(saveProjects(data.projects));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (data)
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
                {data?.projects?.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        handleMakeParams("projectId", String(item.id));
                        handleMakeParams("userId", "");
                      }}
                      className={`dashboard-sidebar-bot ${
                        activeProject === item.id &&
                        "dashboard-sidebar-bot-active"
                      }`}
                      key={item.id}
                    >
                      <BotSvg /> {item.displayName || `Bot-${item.id}`}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Button for create new bot */}
          <div className="dashboard-sidebar-footer">
            <AddProject />
          </div>
        </div>

        {/* List of users */}
        {type === "chat" && <ProjectUsers />}

        {/* Right section of dashboard */}
        <div className="dashboard-right">
          {/* Header of dashboard */}
          <div className="dashboard-header">
            <div className="dashboard-header-menu">
              <RadioButton
                onChange={handleChangeHeader}
                defaultValue={type || "document"}
                buttons={dashboardHeaderButtons}
              />
            </div>
            <CustomButton color="dark" bordered>
              Balance: 25, 000
            </CustomButton>
            <img src={require("src/assets/img/user.png")} alt="user" />
          </div>

          {/* Content of dashboard */}
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    );
}

export default DashboardLayout;
