function solve(input) {
  let objTravel = {};

  while (input.length > 0) {
    let [country, city, price] = input.shift().split(' > ');

    if (!objTravel.hasOwnProperty(country)) {
      objTravel[country] = {};
    }

    if (!objTravel[country].hasOwnProperty(city)) {
      objTravel[country][city] = price;
    } else {
      if (objTravel[country][city] > price) {
        objTravel[country][city] = price;
      }
    }
  }

  objTravel = Object.entries(objTravel).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [key, valKey] of objTravel) {
    // note, I can destruct objects this way

    valKey = Object.entries(valKey).sort(([, a], [, b]) => a - b); // this can be used to sort the values inside the objects.

    console.log(
      key + ' ->',
      Object.values(valKey)
        .map((city) => city.join(' -> '))
        .join(' ')
    );
    // gotta remember I can use entries and map in this way for printing
  }
}
solve([
  'Bulgaria > Sofia > 500',
  'Bulgaria > Sopot > 800',
  'France > Paris > 2000',
  'Albania > Tirana > 1000',
  'Bulgaria > Sofia > 200',
]);
