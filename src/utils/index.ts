export const copyClipboard = (val: string) => {
  navigator.clipboard.writeText(val);
};

export const removeMask = (val: string) => {
  return val.replaceAll(" ", "").replaceAll("_", "");
};

export function encodeProjectId(projectId: number): string {
  const encodedId = btoa(projectId.toString());
  return encodedId;
}

export function decodeProjectId(encodedId: string): number {
  const decodedId = atob(encodedId);
  return parseInt(decodedId, 10);
}

export const clearMask = (val: string) => {
  return val
    .replaceAll(' ', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '');
};

export const makePhoneMask = (val: string) => {
  return `(${val[0] + val[1]})-${val[2] + val[3] + val[4]}-${val[5] + val[6]}-${
    val[7] + val[8]
  }`;
};
