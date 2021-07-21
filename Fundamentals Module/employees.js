function solve(input) {
  for (let str of input) {
    let obj = {
      name: str,
      id: str.length,
    };
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.id}`);
  }
}
