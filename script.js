const boardModule = (() => {
  let gameboardArr = ['x', 'o', 'x',
                      'o', 'x', 'o',
                      'x', 'o', 'x'];
  const gameboard = document.getElementById('gameboard');
  const gameboardCells = document.querySelectorAll('.cell');
  const startBtn = document.getElementById('start-btn');

  let clickedCell = "";
  let currentPlayer = "X";
  let player1Arr = []; 
  let player2Arr = [];
  let moves = 0;
  let winner = "";
  let roundOver = "no";
  
  startBtn.addEventListener('click', () => {
    currentPlayer = "X";
    moves = 0;
    clear();
    render();
  });

  for (let i = 0; i<9; i++) {
    gameboardCells[i].addEventListener('click', () => {
      if (gameboardArr[i] == "" && roundOver == "no") {
          clickedCell = i;
          if (currentPlayer === "X") {
            boardModule.playX(clickedCell);
            currentPlayer = "O";
          } else if (currentPlayer === "O") {
            boardModule.playO(clickedCell);
            currentPlayer = "X";
          } 
          player1Arr = [];
          player2Arr = [];
          boardModule.readArr();
          boardModule.checkWinner();
          boardModule.render();

        console.log("P1 : " + player1Arr + " - P2 : " + player2Arr);
      }
    });
  }
  
  const playX = (a) => {
    gameboardArr[a] = 'x'; 
  }
  const playO = (a) => {
    gameboardArr[a] = 'o';
  }

  const clear = () => {
    gameboardArr = ['', '', '',
                    '', '', '',
                    '', '', ''];
    roundOver = "no";
    winner = "";
  }
  const render = () => {
    for (i=0; i < gameboardArr.length; i++){
      gameboardCells[i].textContent = gameboardArr[i];
    }
  };

  const readArr = () => {
    player1Arr = [];
    player2Arr = [];
    for (let i = 0; i<9; i++) {
      if (gameboardArr[i] === "x") {
        player1Arr.push(i);
      } else if (gameboardArr[i] === "o") {
        player2Arr.push(i);
      }
    }
  }

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    

    boardModule.readArr();

    for (let i = 0; i < winningCombinations.length; i++) {
      if (gameboardArr[winningCombinations[i][0]] == "x" 
        && gameboardArr[winningCombinations[i][1]] == "x" 
        && gameboardArr[winningCombinations[i][2]] == "x"){
          console.log("P1 wins");
          roundOver = "yes";
          winner = "P1";
          return winner;
      } else if (gameboardArr[winningCombinations[i][0]] == "o" 
        && gameboardArr[winningCombinations[i][1]] == "o" 
        && gameboardArr[winningCombinations[i][2]] == "o"){
          console.log("P2 wins");
          roundOver = "yes";
          winner = "P2";
          return winner;
      } 
    }      

    if (moves == 8 && winner == "") {
      roundOver = "yes";
    }
    moves++;
  }


  return {
    playX,
    playO,
    clear,
    render,
    readArr,
    checkWinner,
    gameboard,
  };  
})();

boardModule.clear();
boardModule.render();

