function solve() {
  let textEl = document.querySelector('#text');
  let nameConventionEl = document.querySelector('#naming-convention');

  let text = textEl.value;
  let nameConvention = nameConventionEl.value;

  let result = nameConventionAplier(text, nameConvention);
  let spanEl = document.getElementById('result');
  spanEl.textContent = result;



  function nameConventionAplier(text, ncase){
    const conventionSwitch = {
      'Pascal Case': () => text
      .toLowerCase()
      .split(' ')
      .map(x => x[0].toUpperCase() + x.slice(1))
      .join(''),
      'Camel Case': () => text
      .toLowerCase()
      .split(' ')
      .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
      .join(''),
      default: () => 'Error!'

    };

    return (conventionSwitch[ncase] || conventionSwitch.default)();

  } 
}