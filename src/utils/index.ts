export const copyClipboard = (val: string) => {
  navigator.clipboard.writeText(val);
};
