function solve() {
  let generateBtn = document.querySelectorAll('#exercise button')[0];
  let buyBtn = document.querySelectorAll('#exercise button')[1];

  function generateFurnitures(e) {
      let textareaIn = document.querySelectorAll('#exercise textarea')[0];
      let parseTextareaIn = JSON.parse(textareaIn.value);
      // let boxInput = document.querySelector('input[type="checkbox"');
      // boxInput.disabled = false;
      if (textareaIn.value == '') return;
      parseTextareaIn.forEach(line => {

          let tBody = document.querySelectorAll('.table tbody')[0];
          let tr = createEl('tr', '');

          let tdImg = createEl('td', '');
          let img = createEl('img', line.img);
          tdImg.appendChild(img);
          tr.appendChild(tdImg);

          let tdFurniture = createEl('td', '');
          let tdFurnitureParagraph = createEl('p', line.name);
          tdFurniture.appendChild(tdFurnitureParagraph);
          tr.appendChild(tdFurniture);

          let tdPrice = createEl('td', '');
          let tdPriceParagraph = createEl('p', line.price);
          tdPrice.appendChild(tdPriceParagraph);
          tr.appendChild(tdPrice);

          let tdDecFactor = createEl('td', '');
          let tdDecFactorParagraph = createEl('p', line.decFactor);
          tdDecFactor.appendChild(tdDecFactorParagraph);
          tr.appendChild(tdDecFactor);

          let checkbox = createEl('input', 'checkbox');

          let tdCheckbox = createEl('td', '');
          tdCheckbox.appendChild(checkbox);
          tr.appendChild(tdCheckbox);
          tBody.appendChild(tr);
      });
  }

  function calculateFurnitures() {
      let textareaOut = document.querySelectorAll('#exercise textarea')[1];
      let tBody = Array.from(document.querySelectorAll('.table tbody tr'));

      let totalPrice = 0;
      let decFactor = 0;
      let furnitures = [];
      let counter = 0;

      tBody.forEach(el => {
          let checkbox = el.lastElementChild.querySelector('input');
          if (checkbox.checked != true) return;

          let furnitureName = el.querySelectorAll('td')[1].textContent;
          let furniturePrice = el.querySelectorAll('td')[2].textContent;
          let furnitureDecFactor = el.querySelectorAll('td')[3].textContent;

          totalPrice += Number(furniturePrice);
          decFactor += Number(furnitureDecFactor);

          furnitures.push(furnitureName);
          counter++
      });

      textareaOut.textContent = `Bought furniture: ${furnitures.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor / counter}`
  }

  generateBtn.addEventListener('click', generateFurnitures);
  buyBtn.addEventListener('click', calculateFurnitures);


  function createEl(type, srcText) {
      let element = document.createElement(type);
      if (type == 'img') {
          element.setAttribute('src', srcText);
          return element
      } else if (type == 'input') {
          element.setAttribute('type', srcText);
          element.disabled = false;
          return element
      }
      element.textContent = srcText;
      return element
  }
}