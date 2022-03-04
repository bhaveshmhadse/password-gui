const shuffleArray = (array: any[]): any[] => {
  let modifiedArray = [...array];

  let currentIndex, randomizingIndex;

  for (currentIndex = modifiedArray.length - 1; currentIndex > 0; currentIndex--) {
    randomizingIndex = Math.floor(Math.random() * (currentIndex + 1));
    [modifiedArray[randomizingIndex], modifiedArray[currentIndex]] = [modifiedArray[currentIndex], modifiedArray[randomizingIndex]];
  }

  return modifiedArray;
};

const getShuffledMatrix = (matrix: any): any => {
  let modifiedMatrix = [];

  for (const array of matrix) modifiedMatrix.push(shuffleArray(array));

  modifiedMatrix = shuffleArray(modifiedMatrix);

  return modifiedMatrix;
};

const reload = () => location.reload();

const reset = () => {
  localStorage.clear();
  alert("Password has been reset. Enter new password pattern");

  reload();
};

export { getShuffledMatrix, reload, reset };
