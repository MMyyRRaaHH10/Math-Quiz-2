player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHtml = player1_name + " : ";
document.getElementById("player2_name").innerHtml = player2_name + " : ";

document.getElementById("player1_score").innerHtml = player1_score ; 
document.getElementById("player2_score").innerHtml = player2_score ; 

document.getElementById("player_question").innerHtml = "Question Turn - " + player1_name ; 
document.getElementById("player_answer").innerHtml = "Answer Turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    
}
question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
        {
            if(answer_turn == "player1")
            {
                    update_player1_score = player1_score +1;
                    document.getElementById("player1_score").innerHTML = update_player1_score;
            }
            else
            {
                update_player2_score = player2_score +1;
                document.getElementById("player2_score").innerHTML = update_player2_score;
            }
        }
    if(question_turn == "player1")
        {
          question_turn = "player2"
          document.getElementById("player_question").innerHTML = "Question Turn - " +player2_name ;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
        }
}
question_turn = "player1";
answer_turn = "player2";
function check()
{
 get_answer = document.getElementById("input_check_box").value;
 if(get_answer == "player1")
    {
        update_player1_score = player1_score +1;
        document.getElementByI("player1_score").innerHTML = update_player1_score;
    }
    else
    {
        update_player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }
}if(question_turn == "player1")
    {
       question_turn = "player2"
       document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
    }
    else
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name
    }
