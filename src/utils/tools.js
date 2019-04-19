export const waiter = time => {
  return new Promise(resolve => {
    const tempTimer = setTimeout(() => {
      clearTimeout(tempTimer);
      resolve();
    }, time);
  });
};
