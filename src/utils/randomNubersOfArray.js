


export const generateRandomArray = quantity => {
  return Array.from(
    { length: quantity },
    () => Math.floor(Math.random() * 2) + 1
  );
}




