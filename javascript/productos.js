const remeras = [
  {
    id: 1,
    image: "../resourses/Acdc.webp",
    name: "AC/DC",
    description: "Remera de ACDC de 100% algodón de color negro varios talles",
    size: "XS, S, M, L, XL, XXL",
    amount: 18000,
  },
  {
    id: 2,
    image: "../resourses/ericClapton.webp",
    name: "Eric Clapton",
    description: "Remera de Eric de 100% algodón de color negro varios talles",
    size: "S, M, L",
    amount: 11000,
  },
  {
    id: 3,
    image: "../resourses/remeraOasis.webp",
    name: "Oasis",
    description: "Remera de Oasis de 100% algodón de color negro varios talles",
    size: "XS, S, M, L, XL, XXL",
    amount: 17000,
  },
  {
    id: 4,
    image: "../resourses/oasis2.webp",
    name: "Oasis",
    description:
      "Remera de Oasis de 100% algodón de color blanco varios talles",
    size: "S, M, L, XL",
    amount: 15000,
  },
  {
    id: 5,
    image: "../resourses/ironMaiden.webp",
    name: "Iron Maiden",
    description:
      "Remera de Iron Maiden de 100% algodón de color negro varios talles",
    size: "XS, S, M, L, XL",
    amount: 15.99,
  },
  {
    id: 6,
    image: "../resourses/ironMaiden2.webp",
    name: "Iron Maiden",
    description:
      "Remera de Iron Maiden de 100% algodón de color negro varios talles",
    size: "XS, S, M, L, XL",
    amount: 18000,
  },
  {
    id: 7,
    image: "../resourses/keithRichards.webp",
    name: "Keith Richards",
    description: "Remera de Keith de 100% algodón de color negro varios talles",
    size: "XS, S, M, L, XL, XXL",
    amount: 18000,
  },
  {
    id: 8,
    image: "../resourses/rollingHalloween.webp",
    name: "Halloween Rolling Stones",
    description:"Remera de los Rolling Stones motivo Halloween de 100% algodón de color negro varios talles",
    size: "M, L",
    amount: 11000,
  },
];

let cardsContainer = document.getElementById("productos");

cardsHtml(remeras, cardsContainer);

function cardsHtml(arrayData, cardsContainer) {
  for (let index = 0; index < arrayData.length; index++) {
    createdCard(cardsContainer, arrayData[index]);
  }
}

function createdCard(cardsContainer, card) {
  let generateCard = document.createElement("div");
  generateCard.classList.add("cards", "pt-2", "my-2", "mx-2", "text-white");

  generateCard.innerHTML = `<img src="${card.image}" alt="">
    <h2>${card.name}</h2>
    <p>Talle: ${card.size}</p>`;

  let newChild = document.createElement("div");
  newChild.classList.add("price", "fw-bold", "fs-5", "pb-2");
  newChild.innerHTML = ` <p>Price: ${card.amount} ${"Pesos"}</p>
    <a href="/details.html" class="btn btn-danger comprar">Details</a>`;

  cardsContainer.appendChild(generateCard);
  generateCard.appendChild(newChild);
}