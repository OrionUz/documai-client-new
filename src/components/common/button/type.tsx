type ButtonColorAttribute = "light" | "dark" | "white";
// type ButtonSizeTypeAttribute = "xs" | "sm" | "md" | "l" | "xl";

export type CustomButtonProps = {
  children?: string | JSX.Element | null;
  color?: ButtonColorAttribute;
  loading?: boolean;
  bordered?: boolean;
  left_icon?: boolean;
  icon?: JSX.Element;
  className?: string;
} & Omit<React.ComponentProps<"button">, "children">;

export type ButtonProps = Omit<React.ComponentProps<"button">, "children">;
