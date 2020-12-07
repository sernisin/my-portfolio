import $ from "jquery";
// images
import p3 from "../images/pexelsphoto3985166.jpg";
import p2 from "../images/medical-appointment-doctor-healthcare-40568.jpg";
import p1 from "../images/paper.jpg";

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
  }
];

card.map(function(i) {
  $(".cards").append(`<div class="card ${i.id}">
      <img src="${i.cardImg}" alt="" />
      <h1>${i.cardTitle}</h1>
      <p>${i.cardText}</p>
    </div>`);
});