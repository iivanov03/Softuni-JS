function search() {
   let searchElement = document.getElementById('searchText');
   let allLiEL = Array.from(document.querySelectorAll('#towns li'));

   let search = searchElement.value;

   allLiEL.forEach(el => {
       el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
   });

   let filterdLis = allLiEL
   .filter(x => x.textContent.includes(search))
   let mapedli = filterdLis.map(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';
   });

      let resultDiv = document.getElementById('result');
      resultDiv.textContent = `${mapedli.length} matches found`;
   
}
