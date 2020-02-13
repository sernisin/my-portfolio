import $ from "jquery";
// styles
import "../styles/style.scss";
// scripts
import "./cards.js";
import "./prices.js";


$(document).ready(function() {

  // /about.html -> x indexi
  const pathNameIndex = window.location.pathname.indexOf(".");
  // /about.html -> about.html -> about
  const pathName = window.location.pathname.slice(1).slice(0, pathNameIndex - 1);
 
  $("a").removeClass("active-link");
  $(`a[name=${pathName}]`).addClass("active-link");

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
