import { LoadingOutlined } from "@ant-design/icons";
import { CustomButtonProps } from "./type";

function CustomButton({
  children,
  color,
  loading,
  bordered,
  disabled,
  left_icon,
  icon,
  ...rest
}: CustomButtonProps) {
  return (
    <button
      className={`button button-${color} ${
        (disabled || loading) && `button-${color}-disabled`
      } ${bordered && `button-${color}-bordered`}`}
      {...rest}
    >
      {left_icon && icon && (loading ? <LoadingOutlined /> : icon)}
      {children}
      {!left_icon && icon && !loading && icon}
      {!left_icon && loading && <LoadingOutlined />}
    </button>
  );
}

export default CustomButton;
