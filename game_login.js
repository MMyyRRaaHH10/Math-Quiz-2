function addUser(){
    
    player1_name_input = document.getElementById("player1_name_input").ariaValueMax;

    localStorage.setItem("player1_name_input", player2_name_input);

    window.location = "game_page.html";
}