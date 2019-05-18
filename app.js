


window.onload = function () {
  $("#start").show();
  $(".threeCards").hide();
  $("#navbar").hide();

  $(document).on("click", "#start", function () {
      $("#start").hide();
      $(".threeCards").show();
      $("#navbar").show();
      
  });

  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


};

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


