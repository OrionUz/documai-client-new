import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";
import RoutElements from "./routes";

function App() {
  return (
    <Router>
      <GoogleOAuthProvider clientId="918685351112-14810kuq1lilf3mshdic6ciorc3lq6vh.apps.googleusercontent.com">
        <RoutElements />
      </GoogleOAuthProvider>
    </Router>
  );
}

export default App;
