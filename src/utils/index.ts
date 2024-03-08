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