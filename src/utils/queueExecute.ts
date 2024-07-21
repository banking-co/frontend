export const queueExecute = (cb: () => void, delay: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve(true);
    }, delay);
  });
