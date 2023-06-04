import { Routes, Route } from "react-router-dom";
import Custom404 from "src/pages/404";
import HomePage from "src/pages/home";

function RoutElements() {
  return (
    <div className="root">
      <Routes>
        {/* KHadmin login */}
        <Route index element={<HomePage />} />

        {/* <Route path="/chat" element={<ChatPage />} /> */}
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </div>
  );
}

export default RoutElements;
