$(document).ready(function() {
  $("form#countUpBy").submit(function(event) {

    // capture input and parse
    var number1 = $("#number1").val();
    var number2 = $("#number2").val();

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    // array to capture result of index through iterations of the loop
    var output = [];

    for (var index = number2; index <= number1; index+=number2) {
      output.push(index);
    }

    var result = output.join();

    $("#countUpByOutput").show();
    $("#number1Output").text(number1);
    $("#number2Output").text(number2);
    $("#resultOutput").text(result + "\n");

    event.preventDefault();
  });
});
