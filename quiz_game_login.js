<html>
<body>
<script src="quiz_game_page.js"></script>
</body>
</html>
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
  actual_answer = parInt(number1) *  parseInt(number2); 
}
question_number= "<h4>" + number1 + "X"+ number2 +"</h4>"
input_box = "<br>Answer" : <input type='text' id='input_check-box'>"</input>;
check_button = "<br></br><button class='btn btn-info' onclick='check()'></button>";
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = <br></br> Answer : <input type='text' id='input_check_box'>"</input>;
check button = "<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHtml = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";