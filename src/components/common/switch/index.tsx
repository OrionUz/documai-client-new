import { ConfigProvider, Switch, SwitchProps } from "antd";
import React from "react";

function CustomSwitch(props: SwitchProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5e43d6",
        },
      }}
    >
      <Switch {...props} />
    </ConfigProvider>
  );
}

export default CustomSwitch;
