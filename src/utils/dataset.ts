export const dataset = (el: HTMLElement) => {
  const { dataset } = el;

  return {
    get: (key: string) => dataset[key],
    set: (obj: { [key: string]: unknown }) => Object.assign(dataset, obj),
    remove: (key: string) => delete dataset[key],
  };
};
