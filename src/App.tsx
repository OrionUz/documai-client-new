import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter as Router } from "react-router-dom";
import RoutElements from "./routes";

import { ConfigProvider } from "antd";

import { Provider } from "react-redux";
import { store } from "./app/store";

import i18n from "i18next";
import { Suspense } from "react";
import { initReactI18next } from "react-i18next";
import { language } from "./layout/main/language/const";
import { languageEn } from "./static/language/en";
import { languageRu } from "./static/language/ru";
import { languageUz } from "./static/language/uz";

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
            <GoogleOAuthProvider clientId="471222090720-advpf8o28d4krom5ja2l697gha5skvh8.apps.googleusercontent.com">
              <RoutElements />
            </GoogleOAuthProvider>
          </ConfigProvider>
        </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
