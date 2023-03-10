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
    checkTurn();
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
          checkTurn();
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

  const checkTurn = () => {
    const player1DisplayDiv = document.getElementById('p1-turn');
    const player2DisplayDiv = document.getElementById('p2-turn');
    if (currentPlayer === 'X') {
      player1DisplayDiv.textContent = `${player1.playerName}'s turn, click to place an X`
      player1DisplayDiv.style.display = "block";
      player2DisplayDiv.style.display = "none";
    }
    if (currentPlayer === 'O') {
      player2DisplayDiv.textContent = `${player2.playerName}'s turn, click to place an O`
      player1DisplayDiv.style.display = "none";
      player2DisplayDiv.style.display = "block";
    }
    if (roundOver == 'yes') {
      player1DisplayDiv.style.display = "none";
      player2DisplayDiv.style.display = "none";
    }
  }

  const clear = () => {
    gameboardArr = ['', '', '',
                    '', '', '',
                    '', '', ''];
    roundOver = "no";
    winner = "";
    const winnerDiv = document.getElementById('winner-display');
    winnerDiv.textContent = '';
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
    const winnerDiv = document.getElementById('winner-display');
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
          roundOver = "yes";
          winner = "P1";
          checkTurn();
          winnerDiv.style.color = "blue";
          winnerDiv.textContent = `${player1.playerName} wins, congratulations !`;
          winnerDiv.style.display = "block";
          return winner;
      } else if (gameboardArr[winningCombinations[i][0]] == "o" 
        && gameboardArr[winningCombinations[i][1]] == "o" 
        && gameboardArr[winningCombinations[i][2]] == "o"){
          roundOver = "yes";
          winner = "P2";
          checkTurn();
          winnerDiv.style.color = "red";
          winnerDiv.textContent = `${player2.playerName} wins, congratulations !`;
          winnerDiv.style.display = "block";
      } 
    }      

    if (moves == 8 && winner == "") {
      roundOver = "yes";
      checkTurn();
      winnerDiv.textContent = `Nobody wins, it's a tie !`;
      winnerDiv.style.display = "block";
    }
    moves++;
  }

  const playerFactory = (playerNumber, playerName) => {
    return {playerNumber, playerName};
  }
  
  let player1 = playerFactory("P1", "Player 1");
  let player2 = playerFactory("P2", "Player 2");

  const createP1Btn = document.getElementById('p1-name-btn');
  createP1Btn.addEventListener('click', (event) => {
    event.preventDefault();
    player1 = playerFactory("P1", document.getElementById('p1-name-field').value);
    document.getElementById('p1-name').textContent = player1.playerName;
  });

  const createP2Btn = document.getElementById('p2-name-btn');
  createP2Btn.addEventListener('click', (event) => {
    event.preventDefault();
    player2 = playerFactory("P2", document.getElementById('p2-name-field').value);
    document.getElementById('p2-name').textContent = player2.playerName;
  });

  return {
    playX,
    playO,
    checkTurn,
    clear,
    render,
    readArr,
    checkWinner,
    gameboard,
  };  
})();

  boardModule.clear();
  boardModule.render();



