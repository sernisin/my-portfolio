import $ from "jquery";
let price = [
  {
    base: "COVID-19",
    oneH3: "Müayinə üçün tələblər:",
    twoH3: "Sizin üçün təyin olunmuş saatda COVID-19 testi üçün klinikaya gələn zaman acqarına olmağınız və ya son qida, maye qəbulundan 2-3 saat keçməsi mütləqdir.  ",
    threeH3: "Onlayn qeydiyyatdan keçən zaman öncədən Sizin üçün təyin olunmuş saatda müvafiq mərkəzimizə yaxınlaşacaqsınız.",
    fiveH3: "$10"
  },
  {
    base: "General",
    oneH3: "Əməliyyat öncəsi müayinəƏməliyyat öncəsi müayinə",
    twoH3: "Diabetik skrininq",
    threeH3: "Onlayn qeydiyyatdan keçən zaman öncədən Sizin üçün təyin olunmuş saatda müvafiq mərkəzimizə yaxınlaşacaqsınız.",
    fiveH3: "$25"
  },
  {
    base: "Special",
    oneH3: "Dietoloji paket",
    twoH3: "Saç tökülməsi",
    threeH3: "Onlayn qeydiyyatdan keçən zaman öncədən Sizin üçün təyin olunmuş saatda müvafiq mərkəzimizə yaxınlaşacaqsınız.",
    fiveH3: "$25"
  }
];
$(document).ready(function() {
  price.map(function(el) {
    $(".price").append(
      `<div class="price-card">
              <div><h3 class="base">${el.base}</h3></div>
              <div> <h3>${el.oneH3}</h3></div>
              <div><h3>${el.twoH3}</h3></div>
              <div><h3>${el.threeH3}</h3></div>
              <div> <h3 class="bases">${el.fiveH3}</h3>
              </div>
              <div><button>TAKE</button></div>
            </div>`
    );
  });
});
