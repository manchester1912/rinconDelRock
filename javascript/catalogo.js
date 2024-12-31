const catalogo = [
  {
    id: 1,
    image: "../resourses/topCinco/darkSideOfTheMoonPinkFloyd.jpg",
    artist: "Pink Floyd",
    video: "https://youtu.be/-0kcet4aPpQ?si=l81EQS37TDTUTAZ6",
    album: "Dark Side of the Moon",
    amount: 45000,
  },
  {
    id: 2,
    image: "../resourses/topCinco/definitelyMaybe.png",
    artist: "Oasis",
    video: "https://youtu.be/BJKpUH2kJQg?si=gDwBwtgPXJxwhCE5",
    album: "Definitely Maybe",
    amount: 38000,
  },
  {
    id: 3,
    image: "../resourses/topCinco/metallicaBlackAlbum.jpg",
    artist: "Metallica",
    video: "https://youtu.be/Ckom3gf57Yw?si=f6SV4O3gKX78a1sA",
    album: "Black Album",
    amount: 42000,
  },
  {
    id: 4,
    image: "../resourses/topCinco/gArUseYourIlussionI.jpg",
    artist: "Guns and Roses",
    video: "https://youtu.be/zRIbf6JqkNc?si=yw5vgPpPhsZImdhp",
    album: "Use Your Illusion I",
    amount: 40000,
  },
  {
    id: 5,
    image: "../resourses/gunsUseYourIllusion2.jpeg",
    artist: "Guns and Roses",
    video: "https://youtu.be/NDOPlpH6NZM?si=MtaeKkHrnXeOi5lg",
    album: "Use Your Illusion II",
    amount: 40000,
  },
  {
    id: 6,
    image: "../resourses/topCinco/theNumberOfTheBeastIronMaiden.webp",
    artist: "Iron Maiden",
    video: "https://youtu.be/WxnN05vOuSM?si=FMTr22bLwZTPop7o",
    album: "The Number of the Beast",
    amount: 40000,
  },
  {
    id: 7,
    image: "../resourses/acdcBlackInBlack.jpg",
    artist: "AC/DC",
    video: "https://youtu.be/pAgnJDJN4VA?si=VZ2Mfnw6e82Pa7ty",
    album: "Black in Black",
    amount: 38000,
  },
  {
    id: 8,
    image: "../resourses/queenANightAtTheOpera.jpg",
    artist: "Queen",
    video: "https://youtu.be/fJ9rUzIMcZQ?si=uzXKJAfWPNno2g3b",
    album: "A Night of the Opera",
    amount: 45000,
  },
  {
    id: 9,
    image: "../resourses/DefLeppardHysteria.jpeg",
    artist: "Def Leppard",
    video: "https://youtu.be/0UIB9Y4OFPs?si=7tkzN2O3bMLj5SYV",
    album: "Hysteria",
    amount: 30000,
  },
  {
    id: 10,
    image: "../resourses/pinkFloydPulse.jpg",
    artist: "Pink Floyd",
    video: "https://youtu.be/W0bi7OfaKMY?si=sn3pj3467H7rUPcL",
    album: "Pulse",
    amount: 50000,
  },
  {
    id: 11,
    image: "../resourses/queenLiveAtWembley.jpeg",
    artist: "Queen",
    video: "https://youtu.be/b2NaYj8Gb1w?si=HunfTTVm6WlgxVYa",
    album: "Live at Wembley",
    amount: 50000,
  },
  {
    id: 12,
    image: "../resourses/oasisBeHereNow.jpeg",
    artist: "Oasis",
    video: "https://youtu.be/bdT8ixdxPX4?si=ShvY02ja-8JB-tEB",
    album: "Be here Now",
    amount: 40000,
  },
  {
    id: 13,
    image: "../resourses/davidGilmourLiveAtPompeii.jpeg",
    artist: "David Gilmour",
    video: "https://youtu.be/Z50ssGVeE94?si=Agqjy6MqRhPVbyLQ",
    album: "Live at Pompeii",
    amount: 45000,
  },
  {
    id: 14,
    image: "../resourses/greenDay.webp",
    artist: "Green Day",
    video: "https://youtu.be/CnQ8N1KacJc?si=jM0S88etuRCI9jX5",
    album: "Nimrod",
    amount: 30000,
  },
  {
    id: 15,
    image: "../resourses/bonJoviNewJersey.webp",
    artist: "Bon Jovi",
    video: "https://youtu.be/IxuThNgl3YA?si=iFG0kazcEvJxWGqb",
    album: "New Jersey",
    amount: 35000,
  },
  {
    id: 16,
    image: "../resourses/nirvanaNevermind.jpg",
    artist: "Nirvana",
    video: "https://youtu.be/hTWKbfoikeg?si=BQBgeUgQG6po8-xZ",
    album: "Nevermind",
    amount: 32000,
  },
  {
    id: 17,
    image: "../resourses/metallica.jpeg",
    artist: "Metallica",
    video: "https://youtu.be/JFAcOnhcpGA?si=zbWI0YZd2bhK3FCn",
    album: "Hardwired... To Self-Destruct",
    amount: 42000,
  },
  {
    id: 18,
    image: "../resourses/davidGilmourLaS.jpeg",
    artist: "David Gilmour",
    video: "https://youtu.be/It5QFxLjc2k?si=9qX1HREc2AZw82xK",
    album: "Luck and Strange",
    amount: 45000,
  },
  {
    id: 19,
    image: "../resourses/liamGallagherAsYouWere.jpg",
    artist: "Liam Gallagher",
    video: "https://youtu.be/SDrPghDvYA4?si=H0IbGGEbgy-5wpF9",
    album: "As you Were",
    amount: 37000,
  },
  {
    id: 20,
    image: "../resourses/DSBrothersInArms.jpg",
    artist: "Dire Straits",
    video: "https://youtu.be/kd9TlGDZGkI?si=Zi4KGOwAVenB1WLm",
    album: "Brothers in Arms",
    amount: 32000,
  },
];

let cardsContainer = document.getElementById("catalogo");

cardsHtml(catalogo, cardsContainer);

function cardsHtml(arrayData, cardsContainer) {
  for (let index = 0; index < arrayData.length; index++) {
    createdCard(cardsContainer, arrayData[index]);
  }
}

function createdCard(cardsContainer, card) {
  let generateCard = document.createElement("div");
  generateCard.classList.add("cards", "pt-2", "my-2", "mx-2", "text-white");

  generateCard.innerHTML = `<img src="${card.image}" alt="">
    <h2>${card.artist}</h2>
    <p>Album: ${card.album}</p>
    <p>Precio: ${card.amount} ${"Pesos"}</p>`;

  let newChild = document.createElement("div");
  newChild.classList.add("buttom", "fw-bold", "fs-5", "pb-2");
  newChild.innerHTML = ` <a href="#" class="btn btn-danger comprar">Comprar</a>
    <a target="_blank" href="${card.video}" class="btn btn-danger comprar">Video</a>`;

  cardsContainer.appendChild(generateCard);
  generateCard.appendChild(newChild);
}
