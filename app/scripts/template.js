var wedTmpl = [
 "<% _.each(timeLine, function(element, index, list) { %>",
 "<div class=\"col-xs-12 wedEvents\">",
   "<ul>",
      "<% for (var i=0; i< element.length; i++){ %>",

        "<li><%=element.sixteenNineMonths[i].title%></li>",
      "<% } %>",
   "</ul>",
 "</div>",
"<% }); %>"
].join('\n')
