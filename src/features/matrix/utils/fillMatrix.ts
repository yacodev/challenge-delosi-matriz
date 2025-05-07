export const fillMatrix = (length: number) => {
  return Array.from({ length }, () => Array(length).fill(""));
};
