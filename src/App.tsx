import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";
import RoutElements from "./routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <Router>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#fff",
            colorText: "#fff",
            colorBgBase: "#212A37",
            colorBorder: "#717493",
            borderRadius: 6,
          },
        }}
      >
        <GoogleOAuthProvider clientId="918685351112-14810kuq1lilf3mshdic6ciorc3lq6vh.apps.googleusercontent.com">
          <RoutElements />
        </GoogleOAuthProvider>
      </ConfigProvider>
    </Router>
  );
}

export default App;
