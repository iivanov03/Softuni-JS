function solve(arr, commands) {
  let [count, removeNum, num] = commands;
  let commArr = arr.slice(0, count);
  commArr.splice(0, removeNum);
  let secondCommArr = commArr.filter((x) => x == num);
  console.log(`Number ${num} occurs ${secondCommArr.length} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
