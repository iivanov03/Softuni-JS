function solve(stock, order) {
  let store = {};
  for (let i = 0; i < stock.length; i += 2) {
    let el = stock[i];
    store[el] = Number(stock[i + 1]);
  }
  for (let i = 0; i < order.length; i += 2) {
    let el = order[i];
    if (!store.hasOwnProperty(el)) {
      store[el] = 0;
    }
    store[el] += Number(order[i + 1]);
  }

  for (const key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
}
