import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { message } from "antd";
import { logout } from "src/app/slices/authSlice";
/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses createAsyncThunk from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    if(action?.payload?.status === 401){
      api.dispatch(logout())
      window.location.href = '/auth/signin'
    }
    const error_message =
      action.payload?.data?.message ?? action.payload?.data?.msg ?? action.payload?.data?.err?.message ?? "";
    error_message && message.warning(error_message);

  }

  return next(action);
};
