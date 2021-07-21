function solve(input) {
  let map = new Map();

  input.split(' ').forEach((el) => {
    el = el.toLowerCase();
    if (!map.has(el)) {
      map.set(el, 0);
    }
    map.set(el, map.get(el) + 1);
  });
  return Array.from(map.keys())
    .filter((x) => map.get(x) % 2 !== 0)
    .join(' ');
}
console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
