let dataTotal = [];
let dataCarrito = [];
let contadorBurger = 0;
let contadorProductos = 0;

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
  imagenCentral();
  menu();
  cardsBurgers();
}

function imagenCentral() {
  main = document.getElementsByTagName("main")[0];
  img = document.createElement("img");
  img.setAttribute("id", "imagenCentral");
  img.src = "assets/imagenCentral.png";
  main.appendChild(img);
}

function menu() {
  main = document.getElementsByTagName("main")[0];
  tabla = document.createElement("table");
  tabla.setAttribute("id", "tablaMenu");
  tabla.setAttribute("class", "table table-dark");
  thead = document.createElement("thead");
  tr = document.createElement("tr");

  th1 = document.createElement("th");
  tr.appendChild(th1).innerText = "Burgers";
  th1.setAttribute("onclick", "cardsBurgers()");
  th1.setAttribute("id", "burgerB");

  th2 = document.createElement("th");
  tr.appendChild(th2).innerText = "Tacos";
  th2.setAttribute("onclick", "cardsTacos()");

  th3 = document.createElement("th");
  tr.appendChild(th3).innerText = "Salads";
  th3.setAttribute("onclick", "cardsSalads()");

  th4 = document.createElement("th");
  tr.appendChild(th4).innerText = "Desserts";
  th4.setAttribute("onclick", "cardsDesserts()");

  th5 = document.createElement("th");
  tr.appendChild(th5).innerText = "Drinks & Slides";
  th5.setAttribute("onclick", "cardsDrinks()");

  thead.appendChild(tr);
  tabla.appendChild(thead);

  main.appendChild(tabla);
}

// eslint-disable-next-line no-unused-vars
function cardsBurgers() {
  main1 = document.getElementsByTagName("main")[1];
  main1.innerHTML = "";
  main = document.getElementsByTagName("main")[0];
  main2 = document.getElementsByTagName("main")[2];
  main2.innerHTML = "";
  main3 = document.getElementsByTagName("main")[3];
  main3.innerHTML = "";
  main4 = document.getElementsByTagName("main")[4];
  main4.innerHTML = "";

  if (contadorBurger === 0) {
    //Titulo
    divTitulo = document.createElement("div");
    divTitulo.setAttribute("class", "card");
    divBodyTitulo = document.createElement("div");
    divBodyTitulo.setAttribute("class", "card-body");
    divBodyTitulo.innerHTML = "Burgers";
    divTitulo.appendChild(divBodyTitulo);

    //InfoBurgers
    row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "rowCards");

    for (let index = 0; index < dataTotal.length; index++) {
      col = document.createElement("div");
      col.setAttribute("class", "col");

      div = document.createElement("div");
      div.setAttribute("class", "card");
      div.setAttribute("style", "width: 18rem;");

      img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("src", dataTotal[0].products[index].image);

      divCardBody = document.createElement("div");
      divCardBody.setAttribute("class", "card-body");

      n = document.createElement("h5");
      n.innerText = dataTotal[0].products[index].name;

      p = document.createElement("p");
      p.innerText = dataTotal[0].products[index].description;

      price = document.createElement("h5");
      price.innerText = "$" + dataTotal[0].products[index].price;

      btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btn btn-dark");
      btn.innerHTML = "Add to cart";
      // eslint-disable-next-line no-loop-func
      btn.addEventListener("click", function () {
        numeroProductos();
        agregarACarrito(
          dataTotal[0].products[index].description,
          dataTotal[0].products[index].price
        );
      });

      divCardBody.appendChild(n);
      divCardBody.appendChild(p);
      divCardBody.appendChild(price);
      divCardBody.appendChild(btn);
      div.appendChild(img);
      div.appendChild(divCardBody);
      col.appendChild(div);
      row.appendChild(col);
      contadorBurger++;
    }

    main.appendChild(divTitulo);
    main.appendChild(row);
  } else {
    main.innerHTML = "";
    imagenCentral();
    menu();
    //Titulo
    divTitulo = document.createElement("div");
    divTitulo.setAttribute("class", "card");
    divBodyTitulo = document.createElement("div");
    divBodyTitulo.setAttribute("class", "card-body");
    divBodyTitulo.innerHTML = "Burgers";
    divTitulo.appendChild(divBodyTitulo);

    //InfoBurgers
    row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "rowCards");

    for (let index = 0; index < dataTotal.length; index++) {
      col = document.createElement("div");
      col.setAttribute("class", "col");

      div = document.createElement("div");
      div.setAttribute("class", "card");
      div.setAttribute("style", "width: 18rem;");

      img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("src", dataTotal[0].products[index].image);

      divCardBody = document.createElement("div");
      divCardBody.setAttribute("class", "card-body");

      n = document.createElement("h5");
      n.innerText = dataTotal[0].products[index].name;

      p = document.createElement("p");
      p.innerText = dataTotal[0].products[index].description;

      price = document.createElement("h5");
      price.innerText = "$" + dataTotal[0].products[index].price;

      btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btn btn-dark");
      btn.innerHTML = "Add to cart";
      // eslint-disable-next-line no-loop-func
      btn.addEventListener("click", function () {
        numeroProductos();
        agregarACarrito(
          dataTotal[0].products[index].description,
          dataTotal[0].products[index].price
        );
      });

      divCardBody.appendChild(n);
      divCardBody.appendChild(p);
      divCardBody.appendChild(price);
      divCardBody.appendChild(btn);
      div.appendChild(img);
      div.appendChild(divCardBody);
      col.appendChild(div);
      row.appendChild(col);
      contadorBurger++;
    }

    main.appendChild(divTitulo);
    main.appendChild(row);
  }
}

// eslint-disable-next-line no-unused-vars
function cardsTacos() {
  main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  main1 = document.getElementsByTagName("main")[1];
  main1.innerHTML = "";
  main2 = document.getElementsByTagName("main")[2];
  main2.innerHTML = "";
  main3 = document.getElementsByTagName("main")[3];
  main3.innerHTML = "";
  main4 = document.getElementsByTagName("main")[4];
  main4.innerHTML = "";
  imagenCentral();
  menu();

  //Titulo
  divTitulo = document.createElement("div");
  divTitulo.setAttribute("class", "card");
  divBodyTitulo = document.createElement("div");
  divBodyTitulo.setAttribute("class", "card-body");
  divBodyTitulo.innerHTML = "Tacos";
  divTitulo.appendChild(divBodyTitulo);

  //InfoTacos
  row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("id", "rowCards");

  for (let index = 0; index < dataTotal.length; index++) {
    col = document.createElement("div");
    col.setAttribute("class", "col");

    div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("style", "width: 18rem;");

    img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", dataTotal[1].products[index].image);

    divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    n = document.createElement("h5");
    n.innerText = dataTotal[1].products[index].name;

    p = document.createElement("p");
    p.innerText = dataTotal[1].products[index].description;

    price = document.createElement("h5");
    price.innerText = "$" + dataTotal[1].products[index].price;

    btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-dark");
    btn.innerHTML = "Add to cart";
    // eslint-disable-next-line no-loop-func
    btn.addEventListener("click", function () {
      numeroProductos();
      agregarACarrito(
        dataTotal[1].products[index].description,
        dataTotal[1].products[index].price
      );
    });

    divCardBody.appendChild(n);
    divCardBody.appendChild(p);
    divCardBody.appendChild(price);
    divCardBody.appendChild(btn);
    div.appendChild(img);
    div.appendChild(divCardBody);
    col.appendChild(div);
    row.appendChild(col);
  }

  main1.appendChild(divTitulo);
  main1.appendChild(row);
}

// eslint-disable-next-line no-unused-vars
function cardsSalads() {
  main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  main1 = document.getElementsByTagName("main")[1];
  main1.innerHTML = "";
  main2 = document.getElementsByTagName("main")[2];
  main2.innerHTML = "";
  main3 = document.getElementsByTagName("main")[3];
  main3.innerHTML = "";
  main4 = document.getElementsByTagName("main")[4];
  main4.innerHTML = "";
  imagenCentral();
  menu();

  //Titulo
  divTitulo = document.createElement("div");
  divTitulo.setAttribute("class", "card");
  divBodyTitulo = document.createElement("div");
  divBodyTitulo.setAttribute("class", "card-body");
  divBodyTitulo.innerHTML = "Salads";
  divTitulo.appendChild(divBodyTitulo);

  //InfoTacos
  row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("id", "rowCards");

  for (let index = 0; index < dataTotal.length; index++) {
    col = document.createElement("div");
    col.setAttribute("class", "col");

    div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("style", "width: 18rem;");

    img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", dataTotal[2].products[index].image);

    divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    n = document.createElement("h5");
    n.innerText = dataTotal[2].products[index].name;

    p = document.createElement("p");
    p.innerText = dataTotal[2].products[index].description;

    price = document.createElement("h5");
    price.innerText = "$" + dataTotal[2].products[index].price;

    btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-dark");
    btn.innerHTML = "Add to cart";
    // eslint-disable-next-line no-loop-func
    btn.addEventListener("click", function () {
      numeroProductos();
      agregarACarrito(
        dataTotal[2].products[index].description,
        dataTotal[2].products[index].price
      );
    });

    divCardBody.appendChild(n);
    divCardBody.appendChild(p);
    divCardBody.appendChild(price);
    divCardBody.appendChild(btn);
    div.appendChild(img);
    div.appendChild(divCardBody);
    col.appendChild(div);
    row.appendChild(col);
  }

  main2.appendChild(divTitulo);
  main2.appendChild(row);
}

// eslint-disable-next-line no-unused-vars
function cardsDesserts() {
  main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  main1 = document.getElementsByTagName("main")[1];
  main1.innerHTML = "";
  main2 = document.getElementsByTagName("main")[2];
  main2.innerHTML = "";
  main3 = document.getElementsByTagName("main")[3];
  main3.innerHTML = "";
  main4 = document.getElementsByTagName("main")[4];
  main4.innerHTML = "";
  imagenCentral();
  menu();

  //Titulo
  divTitulo = document.createElement("div");
  divTitulo.setAttribute("class", "card");
  divBodyTitulo = document.createElement("div");
  divBodyTitulo.setAttribute("class", "card-body");
  divBodyTitulo.innerHTML = "Desserts";
  divTitulo.appendChild(divBodyTitulo);

  //InfoTacos
  row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("id", "rowCards");

  for (let index = 0; index < dataTotal.length; index++) {
    col = document.createElement("div");
    col.setAttribute("class", "col");

    div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("style", "width: 18rem;");

    img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", dataTotal[3].products[index].image);

    divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    n = document.createElement("h5");
    n.innerText = dataTotal[3].products[index].name;

    p = document.createElement("p");
    p.innerText = dataTotal[3].products[index].description;

    price = document.createElement("h5");
    price.innerText = "$" + dataTotal[3].products[index].price;

    btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-dark");
    btn.innerHTML = "Add to cart";
    // eslint-disable-next-line no-loop-func
    btn.addEventListener("click", function () {
      numeroProductos();
      agregarACarrito(
        dataTotal[3].products[index].description,
        dataTotal[3].products[index].price
      );
    });

    divCardBody.appendChild(n);
    divCardBody.appendChild(p);
    divCardBody.appendChild(price);
    divCardBody.appendChild(btn);
    div.appendChild(img);
    div.appendChild(divCardBody);
    col.appendChild(div);
    row.appendChild(col);
  }

  main3.appendChild(divTitulo);
  main3.appendChild(row);
}

// eslint-disable-next-line no-unused-vars
function cardsDrinks() {
  main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  main1 = document.getElementsByTagName("main")[1];
  main1.innerHTML = "";
  main2 = document.getElementsByTagName("main")[2];
  main2.innerHTML = "";
  main3 = document.getElementsByTagName("main")[3];
  main3.innerHTML = "";
  main4 = document.getElementsByTagName("main")[4];
  main4.innerHTML = "";
  imagenCentral();
  menu();

  //Titulo
  divTitulo = document.createElement("div");
  divTitulo.setAttribute("class", "card");
  divBodyTitulo = document.createElement("div");
  divBodyTitulo.setAttribute("class", "card-body");
  divBodyTitulo.innerHTML = "Drinks";
  divTitulo.appendChild(divBodyTitulo);

  //InfoTacos
  row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("id", "rowCards");

  for (let index = 0; index < dataTotal.length; index++) {
    col = document.createElement("div");
    col.setAttribute("class", "col");

    div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("style", "width: 18rem;");

    img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", dataTotal[4].products[index].image);

    divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    n = document.createElement("h5");
    n.innerText = dataTotal[4].products[index].name;

    p = document.createElement("p");
    p.innerText = dataTotal[4].products[index].description;

    price = document.createElement("h5");
    price.innerText = "$" + dataTotal[4].products[index].price;

    btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-dark");
    btn.innerHTML = "Add to cart";
    // eslint-disable-next-line no-loop-func
    btn.addEventListener("click", function () {
      numeroProductos();
      agregarACarrito(
        dataTotal[4].products[index].description,
        dataTotal[4].products[index].price
      );
    });

    divCardBody.appendChild(n);
    divCardBody.appendChild(p);
    divCardBody.appendChild(price);
    divCardBody.appendChild(btn);
    div.appendChild(img);
    div.appendChild(divCardBody);
    col.appendChild(div);
    row.appendChild(col);
  }

  main4.appendChild(divTitulo);
  main4.appendChild(row);
}

// eslint-disable-next-line no-unused-vars
function numeroProductos() {
  contadorProductos++;
  textoModificar = document.getElementById("numeroProductos");
  textoModificar.innerHTML = contadorProductos + " items";
}

// eslint-disable-next-line no-unused-vars
function numeroProductosQuitar() {
  contadorProductos--;
  textoModificar = document.getElementById("numeroProductos");
  textoModificar.innerHTML = contadorProductos + " items";
}

// eslint-disable-next-line no-unused-vars
function agregarACarrito(dataDescription, dataPrice) {
  let boolean = false;
  let productoAAgregar = {
    descripcion: dataDescription,
    precio: dataPrice,
    quantity: 1,
  };

  if (dataCarrito.length === 0) {
    dataCarrito.push(productoAAgregar);
  } else {
    for (let index = 0; index < dataCarrito.length; index++) {
      if (dataCarrito[index].descripcion === dataDescription) {
        dataCarrito[index].quantity = dataCarrito[index].quantity + 1;
        boolean = true;
      }
    }
    if (boolean === false) {
      dataCarrito.push(productoAAgregar);
    }
  }
}

// eslint-disable-next-line no-unused-vars
function carrito() {
  main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  main1 = document.getElementsByTagName("main")[1];
  main1.innerHTML = "";
  main2 = document.getElementsByTagName("main")[2];
  main2.innerHTML = "";
  main3 = document.getElementsByTagName("main")[3];
  main3.innerHTML = "";
  main4 = document.getElementsByTagName("main")[4];
  main4.innerHTML = "";
  imagenCentral();
  menu();

  let totalAmount = 0;

  divTitulo = document.createElement("div");
  divTitulo.setAttribute("class", "card");
  divBodyTitulo = document.createElement("div");
  divBodyTitulo.setAttribute("class", "card-body");
  divBodyTitulo.innerHTML = "Order details";
  divTitulo.appendChild(divBodyTitulo);

  tabla = document.createElement("table");
  tabla.setAttribute("class", "table table-striped");
  tabla.classList.add("table");
  tabla.setAttribute("id", "tabla");

  thead = document.createElement("thead");

  tr = document.createElement("tr");

  th = document.createElement("th");
  tr.appendChild(th).innerHTML = "Item";

  th = document.createElement("th");
  tr.appendChild(th).innerHTML = "Qty";

  th = document.createElement("th");
  tr.appendChild(th).innerHTML = "Description";

  th = document.createElement("th");
  tr.appendChild(th).innerHTML = "Unit Price";

  th = document.createElement("th");
  tr.appendChild(th).innerHTML = "Amount";

  th = document.createElement("th");
  tr.appendChild(th).innerHTML = "Add";

  th = document.createElement("th");
  tr.appendChild(th).innerHTML = "Remove";

  thead.appendChild(tr);
  tabla.appendChild(thead);

  //tbody o contenido de la tabla
  tbody = document.createElement("tbody");

  for (let index = 0; index < dataCarrito.length; index++) {
    let tr = tbody.insertRow();

    //Item
    let td = tr.insertCell();
    td.appendChild(document.createTextNode(index + 1));

    //Qty
    td = tr.insertCell();
    td.appendChild(document.createTextNode(dataCarrito[index].quantity));

    //Descripcion
    td = tr.insertCell();
    td.appendChild(document.createTextNode(dataCarrito[index].descripcion));

    //Unit Price
    td = tr.insertCell();
    td.appendChild(document.createTextNode(dataCarrito[index].precio));

    //Amount
    td = tr.insertCell();
    let amount = dataCarrito[index].precio * dataCarrito[index].quantity;
    totalAmount += amount;
    td.appendChild(document.createTextNode(amount));

    //Boton Agregar
    td = tr.insertCell();
    let bt1 = document.createElement("button");
    bt1.setAttribute("type", "button");
    bt1.setAttribute("class", "btn btn-secondary");
    bt1.innerHTML = "+";
    // eslint-disable-next-line no-loop-func
    bt1.addEventListener("click", function () {
      numeroProductos();
      modifyAgregar(dataCarrito[index].descripcion);
    });
    td.appendChild(bt1);

    //Boton Quitar
    td = tr.insertCell();
    let bt2 = document.createElement("button");
    bt2.setAttribute("type", "button");
    bt2.setAttribute("class", "btn btn-secondary");
    bt2.innerHTML = "-";
    // eslint-disable-next-line no-loop-func
    bt2.addEventListener("click", function () {
      numeroProductosQuitar();
      modifyQuitar(dataCarrito[index].descripcion);
    });
    td.appendChild(bt2);
  }

  //Total Amount & Final Buttons Display
  p = document.createElement("p");
  p.innerHTML = "Total: $" + totalAmount;

  container = document.createElement("div");
  container.setAttribute("class", "container");
  row = document.createElement("div");
  row.setAttribute("class", "row");

  col = document.createElement("div");
  col.setAttribute("class", "col");
  col.appendChild(p);

  col2 = document.createElement("div");
  col2.setAttribute("class", "col-6");

  col3 = document.createElement("div");
  col3.setAttribute("class", "col");
  let bt1 = document.createElement("button");
  bt1.setAttribute("type", "button");
  bt1.setAttribute("class", "btn btn-danger");
  bt1.innerHTML = "Cancel";
  let bt2 = document.createElement("button");
  bt2.setAttribute("type", "button");
  bt2.setAttribute("class", "btn btn-success");
  bt2.innerHTML = "Confirm Order";
  col3.appendChild(bt1);
  col3.appendChild(bt2);

  row.appendChild(col);
  row.appendChild(col2);
  row.appendChild(col3);
  container.appendChild(row);

  tabla.appendChild(tbody);

  main.appendChild(divTitulo);
  main.appendChild(tabla);
  main.appendChild(container);
}

function modifyAgregar(pDescripcion) {
  let dataAModificar = dataCarrito.find((o) => o.descripcion === pDescripcion);

  for (let index = 0; index < dataCarrito.length; index++) {
    if (dataAModificar.descripcion === dataCarrito[index].descripcion) {
      dataCarrito[index].quantity = dataCarrito[index].quantity + 1;
    }
  }
  carrito();
}

function modifyQuitar(pDescripcion) {
  let dataAModificar = dataCarrito.find((o) => o.descripcion === pDescripcion);

  for (let index = 0; index < dataCarrito.length; index++) {
    if (dataAModificar.descripcion === dataCarrito[index].descripcion) {
      dataCarrito[index].quantity = dataCarrito[index].quantity - 1;
      if (dataCarrito[index].quantity === 0) {
        dataCarrito.splice(index, 1);
      }
    }
  }
  carrito();
}

// eslint-disable-next-line no-unused-vars
function volverInicio() {
  basico();
}

fetchJson();
