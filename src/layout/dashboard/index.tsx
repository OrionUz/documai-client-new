import { SizeType } from "antd/es/config-provider/SizeContext";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useGetProjectsQuery } from "src/app/services/projects";
import { saveProjects } from "src/app/slices/projectSlice";
import { useAppDispatch } from "src/app/store";
import { ArrowRightSvg, CloseSvg, HamburgerSvg, HomeSvg, QuestionSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import CustomDrawer from "src/components/common/drawer";
import RadioButton from "src/components/common/radio/RadioButton";
import { isMobile } from "src/static/const";
//import Logo from "../main/header/Logo";
import Logo from "../main/header/logo";
import Language from "../main/language";
import ActivatedBots from "./components/ActivatedBots";
import AddProject from "./components/AddProject";
import ProjectUsers from "./components/ProjectUsers";
import UserProfile, { ProfileInfo } from "./components/UserProfile";
import { dashboardHeaderButtons } from "./const";
import Logout from "./components/Logout";
import { useTranslation } from "react-i18next";

function DashboardLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  //Use search params
  const [searchParams] = useSearchParams();

  //Menu
  const projectId = searchParams.get("projectId");

  const location = useLocation();
  const type = location.pathname.split("/")[2];

  const handleChangeHeader = (val: string) => {
    navigate(`/dashboard/${val}?projectId=${projectId}`);
  };

  const SidebarMenu = () => (
    <div className="dashboard-sidebar-top-menu">
      <Link to="/">
        <HomeSvg /> <span>{t("dashboard.home")}</span>
      </Link>
      <a href="https://t.me/documai_support">
        <QuestionSvg />
        <span>{t("dashboard.help")}</span>
      </a>

      {isMobile && <Logout />}
    </div>
  );

  const HeaderMenu = ({ size }: { size: SizeType }) => (
    <div className="dashboard-header-menu">
      <RadioButton
        onChange={handleChangeHeader}
        defaultValue={type || "document"}
        buttons={dashboardHeaderButtons}
        size={size}
      />
    </div>
  );

  //Get projects
  const { data } = useGetProjectsQuery();
  useEffect(() => {
    if (data) dispatch(saveProjects(data.projects));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //Drawer settings
  const [botsVisible, setBotsVisible] = useState(false);
  const [usersVisible, setUsersVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const changeBotsVisible = () => setBotsVisible(!botsVisible);
  const changeUsersVisible = () => setUsersVisible(!usersVisible);
  const changeMenuVisible = () => setMenuVisible(!menuVisible);

  return (
    <div className="dashboard">
      <div className={"dashboard-sidebar"}>
        <div className="dashboard-sidebar-wrap">
          {/* Sidebar top */}
          <div className="dashboard-sidebar-top">
            <Logo />
            <SidebarMenu />
          </div>

          {/* List of bots */}
          <div className="dashboard-sidebar-content">
            <h3>{t("dashboard.activation")}</h3>
            <ActivatedBots />
          </div>
        </div>

        {/* Add Project */}
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
          <div className="dashboard-header-logo">
            <Logo />
          </div>
          <HeaderMenu size="large" />
          <Language />
          <CustomButton color="dark" bordered className="dashboard-header-payment">
            {t("dashboard.balance")}
          </CustomButton>
          <UserProfile />
          <HamburgerSvg onClick={changeMenuVisible} />
        </div>
        <div className="dashboard-header-mobile">
          <HeaderMenu size="middle" />
          <div className="dashboard-header-mobile-right">
            <CustomButton onClick={changeBotsVisible} color="dark" icon={<ArrowRightSvg />}>
              {t("dashboard.bot")}
            </CustomButton>
            <CustomButton onClick={changeUsersVisible} color="dark" icon={<ArrowRightSvg />}>
              {t("dashboard.users")}
            </CustomButton>
          </div>
        </div>

        {/* Content of dashboard */}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>

      {/* Bots drawer */}
      <CustomDrawer
        open={botsVisible}
        width={300}
        placement="left"
        title={null}
        onClose={changeBotsVisible}
        className="dashboard-drawer"
      >
        <div className="dashboard-drawer-header">
          <CloseSvg onClick={changeBotsVisible} />
        </div>
        <div className="dashboard-drawer-title">{t("dashboard.yourBots")}</div>
        <ActivatedBots onChangeMenu={changeBotsVisible} />
        <AddProject />
      </CustomDrawer>

      {/* Users drawer */}
      <CustomDrawer
        open={usersVisible}
        width={300}
        placement="left"
        title={null}
        onClose={changeUsersVisible}
        className="dashboard-drawer"
      >
        <div className="dashboard-drawer-header">
          <CloseSvg onClick={changeUsersVisible} />
        </div>
        <ProjectUsers onChangeUser={changeUsersVisible} />
      </CustomDrawer>

      {/* Menu drawer */}
      <CustomDrawer
        open={menuVisible}
        width={360}
        placement="right"
        title={null}
        onClose={changeMenuVisible}
        className="dashboard-drawer"
      >
        <div className="dashboard-drawer-menu">
          <div>
            <div className="dashboard-drawer-menu-header">
              <ProfileInfo />
              <CloseSvg onClick={changeMenuVisible} />
            </div>
            <SidebarMenu />
          </div>
          <CustomButton color="dark" bordered>
            {t("dashboard.balance1")}
          </CustomButton>
        </div>
      </CustomDrawer>
    </div>
  );
}

export default DashboardLayout;
