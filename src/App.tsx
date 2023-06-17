import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter as Router } from "react-router-dom";
import RoutElements from "./routes";

import { ConfigProvider } from "antd";

import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
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
          <GoogleOAuthProvider clientId="499657436082-g9oggi0d2s3ss49jjl6cv1520117pmnd.apps.googleusercontent.com">
            <RoutElements />
          </GoogleOAuthProvider>
        </ConfigProvider>
      </Router>
    </Provider>
  );
}

export default App;
