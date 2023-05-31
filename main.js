$(document).ready(function () {
  function genereateColorQuote() {
    // Generate a random color on button click
    var randomColor = "";
    var characters = "0123456789abcdef";

    // Run for loop to generate color randomly
    for (let i = 0; i < 6; i++) {
      randomColor += characters[Math.floor(Math.random() * 16)];
    }

    $("body").css("background-color", "#" + randomColor);
    $(".wrapper").css("color", "#" + randomColor);
    $(".btn").css("background-color", "#" + randomColor);

    fetch("quotes.json")
      .then((response) => response.json())
      .then((responseJson) => {
        var num = Math.floor(Math.random() * 100);
        var object = responseJson[num];
        $("#text").text(object.quote);
        $("#author").text("- "+object.author);
    
      });

  }


  genereateColorQuote();

  $("#new-quote").click(function () {
    genereateColorQuote();
    // Changing the quote on the site
  });
});
