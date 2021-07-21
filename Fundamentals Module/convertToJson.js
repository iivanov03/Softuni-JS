function solve(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };
  let formJson = JSON.stringify(person);
  console.log(formJson);
}
solve('George', 'Jones', 'Brown');
