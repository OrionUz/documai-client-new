import { Routes, Route, useLocation } from "react-router-dom";
import { acceptMainLayout } from "./const";

import MainLayout from "src/layout/main";
import Custom404 from "src/pages/404";
import AboutPage from "src/pages/about";
import AuthPage from "src/pages/auth";
import AuthSignin from "src/pages/auth/signin";
import ChatPage from "src/pages/chat";
import DocumentsPage from "src/pages/documents";
import HomePage from "src/pages/home";
import QualityPage from "src/pages/quality";
import QualityIdPage from "src/pages/quality/[id]";
import AuthSignUp from "src/pages/auth/signup";
import NewsPage from "src/pages/news";
import NewsIdPage from "src/pages/news/[id]";
import DocumentsTrainPage from "src/pages/documents/train";
import DashboardLayout from "src/layout/dashboard";
import ChatWidget from "src/pages/widget";
import ChatWidgetId from "src/pages/widget/[id]";
import PricingPage from "src/pages/pricing";

function RoutElements() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <div className="root">
      <Routes>
        <Route
          path="/"
          element={!acceptMainLayout.includes(path) ? <MainLayout /> : null}
        >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="embed">
            <Route path="chat" index element={<ChatWidget />} />
            <Route path="chat/:projectId" element={<ChatWidgetId />} />
          </Route>
          <Route
            path="auth"
            element={
              <AuthPage
              // handleGet={function (): void {
              //   throw new Error("Function not implemented.");
              // }}
              />
            }
          >
            <Route path="signin" element={<AuthSignin />} />
            <Route path="signup" element={<AuthSignUp />} />
          </Route>
          <Route path="pricing" element={<PricingPage />} />
          {/** news page */}
          <Route path="news">
            <Route index element={<NewsPage />} />
            <Route path=":newsId" element={<NewsIdPage />} />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DocumentsPage />} />
            <Route path="document">
              <Route index element={<DocumentsPage />} />
              <Route path="train" element={<DocumentsTrainPage />} />
            </Route>
            <Route path="quality">
              <Route index element={<QualityPage />} />
              <Route path=":qualityId" element={<QualityIdPage />} />
            </Route>
            <Route path="chat" element={<ChatPage />} />
            <Route path="bot/:botId" element={<DocumentsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Custom404 />} />
      </Routes>
    </div>
  );
}

export default RoutElements;
