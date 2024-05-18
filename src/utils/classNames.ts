export const classNames = (classes: { [key: string]: boolean }): string => {
  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(" ");
};
