

let dropdown = document.querySelector('.dropdown-el');
let dropdown2 = document.querySelector('.dropdown-ell');

dropdown.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('expanded');
    let attr = document.querySelector('#' + e.target.getAttribute("for"))
    attr.checked = true
});
dropdown2.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdown2.classList.toggle('expanded');
    let attr = document.querySelector('#' + e.target.getAttribute("for"))
    attr.checked = true
});


document.addEventListener("click", function () {
    dropdown.classList.remove('expanded');
    dropdown2.classList.remove('expanded');

});


//table

const th = ['Document Name','Tipe','Date','Status','Actions']
const td = [
    ['Interview',['./images/pdf.svg','PDF'],'09.12.2020','Active'],
    ['Interview',['./images/excell.svg','XLSX'],'09.12.2020','Active'],
    ['Interview',['./images/word.svg','Word'],'09.12.2020','Active'],
    ['Interview',['./images/pdf.svg','PDF'],'09.12.2020','Active'],
    ['Interview',['./images/pdf.svg','PDF'],'09.12.2020','Active'],
    ['Interview',['./images/word.svg','Word'],'09.12.2020','Deactive'],
    ['Interview',['./images/excell.svg','XLSX'],'09.12.2020','Active'],
    ['Interview',['./images/pdf.svg','PDF'],'09.12.2020','Deactive'],
    ['Interview',['./images/word.svg','Word'],'09.12.2020','Active'],
    ['Interview',['./images/pdf.svg','PDF'],'09.12.2020','Deactive'],
    ['Interview',['./images/excell.svg','XLSX'],'09.12.2020','Active'],
    ['Interview',['./images/excell.svg','XLSX'],'09.12.2020','Active'],

]



  let table = document.querySelector(".table");
  let row = document.createElement("tr");
  
  for (let i = 0; i < 5; i++) {
    let cell = document.createElement("th")
    cell.innerHTML = th[i]
    table.appendChild(row);
    row.appendChild(cell);
    table.appendChild(row);
  }
  

  for (let i = 0; i < td.length; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
  
      let cell = document.createElement("td");
      if(j===1){
        let img = document.createElement('img');
        img.src= td[i][j][0]
        cell.appendChild(img);
        let span = document.createElement('span')
        span.innerHTML=td[i][j][1]
        cell.appendChild(span);

      }
      else if(j===3){
        let button = document.createElement('button')
        button.innerHTML=td[i][j]
        if(button.innerHTML==='Active'){
            button.classList.add('active')
        }else {
            button.classList.add('deactive')

        }
        cell.appendChild(button);

      }
      else if(j===4){
        let div = document.createElement('div')
        div.classList.add('test')
        cell.appendChild(div);
      }else{
          cell.innerHTML=td[i][j]
      }
      row.appendChild(cell);
    }

   
    table.appendChild(row);
  }



  table.setAttribute("border", "2");
