import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter as Router } from "react-router-dom";
import RoutElements from "./routes";

import { ConfigProvider } from "antd";

import { Provider } from "react-redux";
import { store } from "./app/store";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageRu from "./static/language/ru.json";
import languageUz from "./static/language/uz.json";
import languageEn from "./static/language/en.json";
import { language } from "./layout/main/language/const";
import { Suspense } from "react";

function App() {
  i18n.use(initReactI18next).init({
    resources: {
      uz: { translation: languageUz },
      ru: { translation: languageRu },
      en: { translation: languageEn },
    },
    fallbackLng: language || "uz",
    interpolation: { escapeValue: false },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default App;
