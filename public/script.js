//NavBar
$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
        $(target).animate({
          height: "toggle"
        });
      });
    });
  });
  //Scroller
  $(document).ready(function () {
    $(".scroller a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function () {
          window.location.hash = hash;
        });
      }
    });
  })