let dataTotal = [];
function fetchJson() {
  fetch(
    "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"
  )
    .then((response) => response.json())
    .then((data) => {
      dataTotal = data;
      basico();
    });
}

function basico() {
  //crearListaMenus();
  crearTablaBurgers(dataTotal);
  crearTablaTacos(dataTotal);
  crearTablaSalads(dataTotal);
  crearTablaDesserts(dataTotal);
  crearTablaDrinkAndSides(dataTotal);
}

/*

function crearListaMenus() {
  let body = document.body;

  div = document.createElement("div");
  div.setAttribute("class", "btn-group");

  btn1 = document.createElement("button");
  btn1.setAttribute("type", "button");
  btn2 = document.createElement("button");
  btn2.setAttribute("type", "button");
  btn3 = document.createElement("button");
  btn3.setAttribute("type", "button");
  btn4 = document.createElement("button");
  btn4.setAttribute("type", "button");
  btn5 = document.createElement("button");
  btn5.setAttribute("type", "button");

  div.appendChild(bt1);
  div.appendChild(bt2);
  div.appendChild(bt3);
  div.appendChild(bt4);
  div.appendChild(bt5);

  body.appendChild(body);
}
*/


function crearTablaBurgers(data) {
  let body = document.body;
  titulo = document.createElement("h1");
  titulo.innerText = "Burgers";

  tabla = document.createElement("table");
  tabla.classList.add("table");

  thead = document.createElement("thead");
  tr = document.createElement("tr");
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Item";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Qty";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Description";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Unit Price";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Amount";

  thead.appendChild(tr);
  tabla.appendChild(thead);

  tbod = document.createElement("tbody");

  for (let index = 0; index < data.length; index++) {
    let tr = tbod.insertRow();
    let td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(
      document.createTextNode(dataTotal[0].products[index].description)
    );
    td = tr.insertCell();

    td.appendChild(document.createTextNode(dataTotal[0].products[index].price));
    td = tr.insertCell();
  }

  tabla.appendChild(tbod);

  body.appendChild(titulo);
  body.appendChild(tabla);
}

function crearTablaTacos(data) {
  let body = document.body;
  titulo = document.createElement("h1");
  titulo.innerText = "Tacos";

  tabla = document.createElement("table");
  tabla.classList.add("table");

  thead = document.createElement("thead");
  tr = document.createElement("tr");
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Item";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Qty";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Description";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Unit Price";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Amount";

  thead.appendChild(tr);
  tabla.appendChild(thead);

  tbod = document.createElement("tbody");

  for (let index = 0; index < data.length; index++) {
    let tr = tbod.insertRow();
    let td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(
      document.createTextNode(dataTotal[1].products[index].description)
    );
    td = tr.insertCell();

    td.appendChild(document.createTextNode(dataTotal[1].products[index].price));
    td = tr.insertCell();
  }

  tabla.appendChild(tbod);

  body.appendChild(titulo);
  body.appendChild(tabla);
}

function crearTablaSalads(data) {
  let body = document.body;
  titulo = document.createElement("h1");
  titulo.innerText = "Saladas";

  tabla = document.createElement("table");
  tabla.classList.add("table");

  thead = document.createElement("thead");
  tr = document.createElement("tr");
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Item";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Qty";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Description";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Unit Price";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Amount";

  thead.appendChild(tr);
  tabla.appendChild(thead);

  tbod = document.createElement("tbody");

  for (let index = 0; index < data.length; index++) {
    let tr = tbod.insertRow();
    let td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(
      document.createTextNode(dataTotal[2].products[index].description)
    );
    td = tr.insertCell();

    td.appendChild(document.createTextNode(dataTotal[2].products[index].price));
    td = tr.insertCell();
  }

  tabla.appendChild(tbod);

  body.appendChild(titulo);
  body.appendChild(tabla);
}

function crearTablaDesserts(data) {
  let body = document.body;
  titulo = document.createElement("h1");
  titulo.innerText = "Desserts";

  tabla = document.createElement("table");
  tabla.classList.add("table");

  thead = document.createElement("thead");
  tr = document.createElement("tr");
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Item";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Qty";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Description";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Unit Price";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Amount";

  thead.appendChild(tr);
  tabla.appendChild(thead);

  tbod = document.createElement("tbody");

  for (let index = 0; index < data.length; index++) {
    let tr = tbod.insertRow();
    let td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(
      document.createTextNode(dataTotal[3].products[index].description)
    );
    td = tr.insertCell();

    td.appendChild(document.createTextNode(dataTotal[3].products[index].price));
    td = tr.insertCell();
  }

  tabla.appendChild(tbod);

  body.appendChild(titulo);
  body.appendChild(tabla);
}

function crearTablaDrinkAndSides(data) {
  let body = document.body;
  titulo = document.createElement("h1");
  titulo.innerText = "DrinkAndSides";

  tabla = document.createElement("table");
  tabla.classList.add("table");

  thead = document.createElement("thead");
  tr = document.createElement("tr");
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Item";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Qty";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Description";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Unit Price";
  th = document.createElement("th");
  tr.appendChild(th).innerText = "Amount";

  thead.appendChild(tr);
  tabla.appendChild(thead);

  tbod = document.createElement("tbody");

  for (let index = 0; index < data.length; index++) {
    let tr = tbod.insertRow();
    let td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(document.createTextNode(index + 1));
    td = tr.insertCell();

    td.appendChild(
      document.createTextNode(dataTotal[4].products[index].description)
    );
    td = tr.insertCell();

    td.appendChild(document.createTextNode(dataTotal[4].products[index].price));
    td = tr.insertCell();
  }

  tabla.appendChild(tbod);

  body.appendChild(titulo);
  body.appendChild(tabla);
}

fetchJson();
