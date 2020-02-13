import $ from "jquery";
// images
import p3 from "../images/p3.jpg";
import p2 from "../images/p2.jpg";
import p1 from "../images/p1.jpg";
import light from "../images/lights.jpg";
import mountain from "../images/mountains.jpg";
import nature from "../images/nature.jpg";

let card = [
  {
    id: "design",
    cardImg: p3,
    cardTitle: "Lorem Ipsum",
    cardText:
      "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  },
  {
    id: "art",
    cardImg: p2,
    cardTitle: "Lorem Ipsum",
    cardText:
      "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  },
  {
    id: "photos",
    cardImg: p1,
    cardTitle: "Lorem Ipsum",
    cardText:
      "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  },
  {
    id: "design",
    cardImg: light,
    cardTitle: "Lorem Ipsum",
    cardText:
      "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  },
  {
    id: "art",
    cardImg: mountain,
    cardTitle: "Lorem Ipsum",
    cardText:
      "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  },
  {
    id: "photos",
    cardImg: nature,
    cardTitle: "Lorem Ipsum",
    cardText:
      "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  }
];

card.map(function(i) {
  $(".cards").append(`<div class="card ${i.id}">
      <img src="${i.cardImg}" alt="" />
      <h1>${i.cardTitle}</h1>
      <p>${i.cardText}</p>
    </div>`);
});