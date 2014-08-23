$(document).ready(function () {

  home.init();

});

var home = {

  init: function () {
    this.initStyling();
    this.initEvents();

  },
    initStyling: function () {

    },
    initEvents: function () {
      $(".intro").on("submit", function (event) {
        event.preventDefault();
        var myDate = window.myDate = $("#wedDate").val();
        console.log(myDate);

      })
    },
    render: function (template, data, $element) {
      var markup = _.template(template,data);
      $element.html(markup);
    },




}
