const dataCards = [
  {
    imgSrc: "./assets/pictures/photo1.png",
    className: "creative__section-card-display",
    name: "Bill Mahoney",
    role: "Product owner"
  },
  {
    imgSrc: "./assets/pictures/photo2.png",
    className: "creative__section-card-display-alt",
    name: "Shae Le",
    role: "Tech Lead"
  },
  {
    imgSrc: "./assets/pictures/photo3.png",
    className: "creative__section-card-display",
    name: "Griff Richards",
    role: "Developer"
  },
  {
    imgSrc: "./assets/pictures/photo4.png",
    className: "creative__section-card-display-alt",
    name: "Saba Cabrera",
    role: "Art director"
  },
  {
    imgSrc: "./assets/pictures/photo5.png",
    className: "creative__section-card-display",
    name: "Skylah Lu",
    role: "UX Designer"
  },
  {
    imgSrc: "./assets/pictures/photo6.png",
    className: "creative__section-card-display-alt",
    name: "Stan John",
    role: "Deverloper"
  }
];

const containerCards = document.getElementById("cards-container");

dataCards.forEach((_i) => {
  const card = `
  <div class=${_i.className}>
    <div>
      <img
        class="creative__crew-section-card-picture"
        src=${_i.imgSrc}
      />
      <p class="creative__crew-section-card-name">${_i.name}</p>
    </div>
    <p class="creative__crew-section-card-role">${_i.role}</p>
  </div>
  `;

  //   const card = `
  // <div>
  //  <div>
  //   <img />
  //   <p>name</p>
  //  </div>
  //  <p>Role verticaly</p>
  // </div>
  //   `;

  containerCards.innerHTML += card;
});
