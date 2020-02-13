import $ from "jquery";
// styles
import "../styles/style.scss";
// scripts
import "./cards.js";
import "./prices.js";

$(document).ready(function() {
  $(".fa-bars").click(function() {
    $(".content")
      .find(".left-nav")
      .toggle(200);
  });
  $(".fa-times").click(function() {
    $(".content")
      .find(".left-nav")
      .toggle(200);
  });
});
