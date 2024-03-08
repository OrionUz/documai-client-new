import { Outlet } from "react-router-dom";
import { useTypedSelector } from "src/app/store";
import Footer from "./footer";
import Header from "./header";

function MainLayout() {
  const navigation = useTypedSelector((state) => state.header.navigation);
  return (
    <div style={navigation ? { height: "100vh", overflow: "hidden" } : {}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
