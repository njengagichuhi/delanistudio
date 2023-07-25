//about
$(document).ready(function () {
  $(".design img").click(function () {
    $(".design p").show();
    $(".design img").click(function () {
      $(".design p").hide();
    });
  });
});

$(document).ready(function () {
  $(".product img").click(function () {
    $(".product p").show();
    $(".product img").click(function () {
      $(".product p").hide();
    });
  });
});

$(document).ready(function () {
  $(".develope img").click(function () {
    $(".develope p").show();
    $(".develope img").click(function () {
      $(".develope p").hide();
    });
  });
});
//hover

//allert
$(document).ready(function () {
  $("button").click(function () {
    var str = $("#name").val();
    $("#message").html(
      str + " we have recieved your comment, thank you for reaching out to us"
    );
    $(".col").hide();
      $("#message").show();
      $(".form-group").hide();
      $("#subb").hide();
  });
});

$(".hov img").hover(
  function () {
    $(".img_description ").show();
  },
  function () {
    $(".img_description").hide();
  }
);
$(document).ready(function(){
  $(".pot img").hover(
    function () {
      $(".img_descri ").show();
    },
    function () {
      $(".img_descri").hide();
    })
})