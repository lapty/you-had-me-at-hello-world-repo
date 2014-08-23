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
        $(".slideUp").toggleClass("slideUp2");
        $(".top").toggleClass("hideNote");

        if (monthCount(myDate) > 9 ){

          $(".listCreate").prepend("<h3>Between Sixteen and Nine Months Out:</h2>");

          for (var i = 0; i < sixteenNineMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + sixteenNineMonths[i].title + "<li><span class='notes hideNote'>"+sixteenNineMonths[i].note+"</span></li></ul>");
          }
        }
        if (monthCount(myDate) === 8 ){
          $(".listCreate").prepend("<h3>While You're Eight Months Out: </h2>");
          for (var i = 0; i < eightMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + eightMonths[i].title + "<li><span class='notes hideNote'>"+eightMonths[i].note+"</span></li></ul>");
          }
        }
        if (monthCount(myDate) < 8 && monthCount(myDate) > 5 ){
          $(".listCreate").prepend("<h3>Between Seven and Six Months Out:</h2>");
          for (var i = 0; i < sevenSixMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + sevenSixMonths[i].title + "<li><span class='notes hideNote'>"+sevenSixMonths[i].note+"</span></li></ul>");
          }
        }
        if (monthCount(myDate) < 6 && monthCount(myDate) > 3){
          $(".listCreate").prepend("<h3>Between Four and Five Months Out:</h2>");
          for (var i = 0; i < fiveFourMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + fiveFourMonths[i].title + "<li><span class='notes hideNote'>"+fiveFourMonths[i].note+"</span></li></ul>");
          }
        }
        if (monthCount(myDate) === 3){
          $(".listCreate").prepend("<h3>While You're Three Months Out:</h2>");
          for (var i = 0; i < threeMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + threeMonths[i].title + "<li><span class='notes hideNote'>"+threeMonths[i].note+"</span></li></ul>");
          }
        }
        if (monthCount(myDate) === 2){
          $(".listCreate").prepend("<h3>Two Months to Go, You Should:</h2>");
          for (var i = 0; i < twoMonths.length; i++) {
            $(".listCreate").append("<ul><li>" + twoMonths[i].title + "<li><span class='notes hideNote'>"+twoMonths[i].note+"</span></li></ul>");
          }
        }
        if (monthCount(myDate) === 1){
          $(".listCreate").prepend("<h3>One More Month, You Should:</h2>");
          for (var i = 0; i < oneMonth.length; i++) {
            $(".listCreate").append("<ul><li>" + oneMonth[i].title + "</li><li><p class='notes hideNote'>"+oneMonth[i].note+"</p></li></ul>");

          }
        }
      });
      $(".listCreate").on("click", "li", function(event){
        console.log('here');
        $(this).siblings().find("p").toggleClass("hideNote");
      });


    }
  }
