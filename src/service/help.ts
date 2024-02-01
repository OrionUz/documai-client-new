import { ROLE, TOKEN } from "./const";

export const handleLogoutFunc = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(ROLE);
  window.location.href = "/";
};
