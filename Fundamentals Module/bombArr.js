function solve(arr, bombArr) {
  let [bomb, range] = bombArr;

  while (arr.includes(bomb)) {
    let index = arr.indexOf(bomb);
    let elementToRemove = range * 2 + 1;
    let startingPoint = index - range;

    if (startingPoint < 0) {
      elementToRemove += startingPoint;
      startingPoint = 0;
    }

    arr.splice(startingPoint, elementToRemove);
  }

  return arr.reduce((a, b) => a + b, 0);
}
