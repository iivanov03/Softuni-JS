function solve(budget, students, priceOfFlour, priceOfEgg, priceOfApron) {
  budget = Number(budget);
  students = Number(students);
  priceOfFlour = Number(priceOfFlour);
  priceOfEgg = Number(priceOfEgg);
  priceOfApron = Number(priceOfApron);

  let finalePrice =
    priceOfApron * (students + Math.ceil(0.2 * students)) +
    priceOfEgg * 10 * students +
    priceOfFlour * students;

  if (budget > finalePrice) {
    console.log(`Items purchased for ${finalePrice.toFixed(2)}$.`);
  } else {
    console.log(`${(finalePrice - budget).toFixed(2)}$ more needed.`);
  }
}
// solve(50, 2, 1.0, 0.1, 10.0);
solve(100, 25, 4.0, 1.0, 6.0);
