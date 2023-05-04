player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML =player1_score;
document.getElementById("player2_score").innerHTML =player2_score;

document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name ;

function send(){
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log ("word in lowercase = " + word);

CharAt1 = word.charAt(1);
console.log(CharAt1);
length_divide_2 = Math.floor(word.length/2);
CharAt2 = word.charAt( length_divide_2);
console.log(CharAt2);

length1 = word.length - 1 ;
CharAt3 = word.charAt(length1);
console.log(CharAt3);

removeCharAt1 = word.replace(CharAt1,"_");

removeCharAt2 = removeCharAt1.replace(CharAt2,"_");
removeCharAt3 = removeCharAt2.replace(CharAt3,"_");
console.log(removeCharAt3);
question_word = "<h4 id ='word_display' >Q. "+ removeCharAt3 +"</h4>";
inputbox= "<br> ANSWER ; <input type= 'text' id='input_check_box'>";
check_button = "<br> <br> <button class = 'btn btn-info ' onclick = 'check() ' >CHECK </button>";
row= question_word+ inputbox+check_button;
console.log(question_word+inputbox+check_button);
document.getElementById("output").innerHTML=row;
document.getElementById("word").value = " ";
}
question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case - " +answer);
    if(answer== word)
    {
       player1_score= player1_score+1;
       document.getElementById("player1_score").innerHTML=player1_score;

    }
    else
    {
        player2_score= player2_score+1;
       document.getElementById("player2_score").innerHTML=player2_score;

    }
    
    if(question_turn=="player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn - " + player2_name;

    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
    }
    if(answer_turn=="player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;

    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player1_name;
    }

}