$('.form').submit(e => {
  e.preventDefault();

  $.fancybox.open({
    src: "modal",
    type: "inline"
  })
});

$(".app-submit-button").click(e => {
  e.preventDefault();

  $.fancybox.close();
});