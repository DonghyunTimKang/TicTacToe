function startGame() {
    document.turn = "X";

    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
        setMessage("X starts");
        num = 0;
      }


    }



    function setMessage(msg) {
      document.getElementById("message").innerText = msg;
    }

    function nextMove(square) {
    if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
      } else {
        setMessage("That square is already used.");
      }

    if (document.getElementById("message").innerText == "X Wins!"){
      var game = prompt("X wins! Play Again? Yes or No. (Case sensitive)");
        switch (game){
          case "Yes":
          startGame();
          break;
          case "No":
          close();
          break;
        }
    }

if (document.getElementById("message").innerText == "O Wins!"){
      var game = prompt("O wins! Play Again? Yes or No.(Case sensitive)");
        switch (game){
          case "Yes":
          startGame();
          break;
          case "No":
          close();
          break;
        }
    }

    }


    var num = 0;
    function switchTurn() {


      if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
        num = num +1;

      if (num==5) {
        setMessage("Tie");
      }
      } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");


      }



      if (getBox(1) == "X" && getBox(2) == "X" && getBox(3) == "X"){
        document.winner = document.turn;
        setMessage("X Wins!");
      }
      if (getBox(4) == "X" && getBox(5) == "X" && getBox(6) == "X"){
        setMessage("X Wins!");
      }
      if (getBox(7) == "X" && getBox(8) == "X" && getBox(9) == "X"){
        setMessage("X Wins!");
      }
      if (getBox(1) == "X" && getBox(4) == "X" && getBox(7) == "X"){
        setMessage("X Wins!");
      }
      if (getBox(2) == "X" && getBox(5) == "X" && getBox(8) == "X"){
        setMessage("X Wins!");
      }
      if (getBox(3) == "X" && getBox(6) == "X" && getBox(9) == "X"){
        setMessage("X Wins!");
      }
      if (getBox(1) == "X" && getBox(5) == "X" && getBox(9) == "X"){
        setMessage("X Wins!");
      }
      if (getBox(7) == "X" && getBox(5) == "X" && getBox(3) == "X"){
        setMessage("X Wins!");
      }
      //If rows match O, then O wins
      if (getBox(1) == "O" && getBox(2) == "O" && getBox(3) == "O"){
        setMessage("O Wins!");
      }
      if (getBox(4) == "O" && getBox(5) == "O" && getBox(6) == "O"){
        setMessage("O Wins!");
      }
      if (getBox(7) == "O" && getBox(8) == "O" && getBox(9) == "O"){
        setMessage("O Wins!");
      }
      if (getBox(1) == "O" && getBox(4) == "O" && getBox(7) == "O"){
        setMessage("O Wins!");
      }
      if (getBox(2) == "O" && getBox(5) == "O" && getBox(8) == "O"){
        setMessage("O Wins!");
      }
      if (getBox(3) == "O" && getBox(6) == "O" && getBox(9) == "O"){
        setMessage("O Wins!");
      }
      if (getBox(1) == "O" && getBox(5) == "O" && getBox(9) == "O"){
        setMessage("O Wins!");
      }
      if (getBox(7) == "O" && getBox(5) == "O" && getBox(3) == "O"){
        setMessage("O Wins!");
      }




    }


    function getBox(number) {
      return document.getElementById(number).innerText;
    }

    function clearBox(number) {
      document.getElementById(number).innerText = "";

    }
