
export function compareArrays(arr1: any[], arr2: any[]): boolean {
  console.log('arr1', JSON.stringify(arr1))
  console.log('arr2', JSON.stringify(arr2))
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}