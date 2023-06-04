import { Routes, Route, useLocation } from "react-router-dom";
import DashboardLayout from "src/layout/dashboard";
import MainLayout from "src/layout/main";
import Custom404 from "src/pages/404";
import AboutPage from "src/pages/about";
import DocumentsPage from "src/pages/documents";
import HomePage from "src/pages/home";

function RoutElements() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  console.log(path);

  return (
    <div className="root">
      <Routes>
        <Route path="/" element={path !== "dashboard" ? <MainLayout /> : null}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DocumentsPage />} />
            <Route path="bot/:botId" element={<DocumentsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Custom404 />} />
      </Routes>
    </div>
  );
}

export default RoutElements;
