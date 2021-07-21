function barIncome(input) {
  let regex = /%(?<name>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>\w+)>[^\|\$%\.]*\|(?<count>[0-9]+)\|[^\|\$%\.]*?(?<price>[0-9]+(\.?[0-9])*)\$/g;
  let sum = 0;
  for (let line of input) {
    let match = regex.exec(line);
    if (match) {
      let totalPrice = Number(match.groups.price) * Number(match.groups.count);
      sum += totalPrice;
      console.log(
        `${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(
          2
        )}`
      );
    }
  }
  console.log(`Total income: ${sum.toFixed(2)}`);
}
barIncome([
  '%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift',
]);
