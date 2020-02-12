// styles
import "../styles/style.scss";
import "./cards.js";
import "./prices.js";
import $ from "jquery";

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
