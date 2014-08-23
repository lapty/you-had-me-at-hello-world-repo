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
        var monthCount = function(date){
        var numMonths = window.numMonths;
        var year = Number(moment(date).utc().format('YYYY'));
        var month= Number(moment(date).utc().format('MM'));
        var nowYear = Number(moment().utc().format('YYYY'));
        var nowMonth= Number(moment().utc().format('MM'));
        var diffYear = year - nowYear;
          if(diffYear >= 1 && month > nowMonth){
            var numMonths = (month - nowMonth) + 12*diffYear;
          }else if(diffYear >= 1 && month < nowMonth){
            var numMonths= 12*diffYear - (nowMonth - month);
          }else if(diffYear === 1){
            var numMonths = 12;
          }else if(diffYear < 1 && month > nowMonth){
            var numMonths = month - nowMonth;
          }else if(diffYear < 1 && month < nowMonth){
            var numMonths= nowMonth - month;
          }
          return numMonths;
      }

        $(".counter").append(monthCount(myDate));
        if (monthCount(myDate) > 9 ){
          for (var i = 0; i < sixteenNineMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + sixteenNineMonths[i].title + "</li></ul>");
          }
        }
        if (monthCount(myDate) === 8 ){
          for (var i = 0; i < eightMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + eightMonths[i].title + "</li></ul>");
          }
        }
        if (monthCount(myDate) < 8 && monthCount(myDate) > 5 ){
          for (var i = 0; i < sevenSixMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + sevenSixMonths[i].title + "</li></ul>");
          }
        }
        if (monthCount(myDate) < 6 && monthCount(myDate) > 3){
          for (var i = 0; i < fiveFourMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + fiveFourMonths[i].title + "</li></ul>");
          }
        }
        if (monthCount(myDate) === 3){
          for (var i = 0; i < threeMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + threeMonths[i].title + "</li></ul>");
          }
        }
        if (monthCount(myDate) === 2){
          for (var i = 0; i < twoMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + twoMonths[i].title + "</li></ul>");
          }
        }
        if (monthCount(myDate) === 1){
          for (var i = 0; i < oneMonth.length; i++) {
            $(".listCreate").append("<ul><li>" + oneMonth[i].title + "<span class='notes hideNote'>"+oneMonth[i].note+"</span></li></ul>");

          }
        }


      });

    },
    render: function (template, data, $element) {
      var markup = _.template(template,data);
      $element.html(markup);
    },

    url: 'http://tiy-fee-rest.herokuapp.com/collections/thebigday',








}
