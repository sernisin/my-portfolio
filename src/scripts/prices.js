import $ from "jquery";
let price = [
  {
    base: "Basic",
    oneH3: "Web Design",
    twoH3: "Photography",
    threeH3: "5GB Storage",
    fourH3: "Mail Support",
    fiveH3: "$10",
    fiveH3Span: "per month",
    button: "Sign Up"
  },
  {
    base: "Pro",
    oneH3: "Web Design",
    twoH3: "Photography",
    threeH3: "50GB Storage",
    fourH3: "Endless Support",
    fiveH3: "$25",
    fiveH3Span: "per month",
    button: "Sign Up"
  },
  {
    base: "Premium",
    oneH3: "Web Design",
    twoH3: "Photography",
    threeH3: "Unlimited Storage",
    fourH3: "Endless Support",
    fiveH3: "$25",
    fiveH3Span: "per month",
    button: "Sign Up"
  }
];
$(document).ready(function() {
  price.map(function(el) {
    $(".price").append(
      `<div class="price-card">
              <div>
                <h3 class="base">${el.base}</h3>
              </div>
              <div>
                <h3>${el.oneH3}</h3>
              </div>
              <div>
                <h3>${el.twoH3}</h3>
              </div>
              <div>
                <h3>${el.threeH3}</h3>
              </div>
              <div>
                <h3>${el.fourH3}</h3>
              </div>
              <div>
                <h3 class="bases">${el.fiveH3} <br /><span>${el.fiveH3Span}</span></h3>
              </div>
              <div><button>${el.button}</button></div>
            </div>`
    );
  });
});
