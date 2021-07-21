function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchEl = document.getElementById('searchField');
      let rowEl = Array.from(document.querySelectorAll('tbody tr'));
      let searchText = searchEl.value;

      rowEl.forEach(el => {
         el.className = '';
      });
      let filterRow = rowEl.filter(el => {
         let values = [...el.children];
         if(values.some(x => x.textContent.includes(searchText))){
            el.className = 'select';
         }
      })

   }
}