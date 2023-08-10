export const copyClipboard = (val: string) => {
  navigator.clipboard.writeText(val);
};

export const removeMask = (val: string) => {
  return val.replaceAll(" ", "").replaceAll("_", "");
};
