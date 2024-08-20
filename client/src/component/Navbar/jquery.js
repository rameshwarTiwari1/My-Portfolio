import $ from "jquery";

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeAttr("class");
    $(this).addClass("nav-link active");
  });
});

