


window.onload = function () {
  $("#start").show();
  $(".threeCards").hide();

  $(document).on("click", "#start", function () {
      $("#start").hide();
      $(".threeCards").show();
  });
};

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
