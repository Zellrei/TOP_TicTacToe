const boardModule = (() => {
  let gameboardArr = ['x', 'o', 'x',
                      'o', 'x', 'o',
                      'x', 'o', 'x'];
  const gameboard = document.getElementById('gameboard');
  const gameboardCells = document.querySelectorAll('.cell');

  let clickedCell = "";
  
  for (let i = 0; i<9; i++) {
    gameboardCells[i].addEventListener('click', (event) => {
        clickedCell = i;
        console.log('clicked ', i);
        console.log(clickedCell);
    });
  }
  
  const playX = (a) => gameboardArr[a] = 'x'; 
  const playO = (a) => gameboardArr[a] = 'o'; ;
  const clear = () => gameboardArr = ['', '', '',
                                      '', '', '',
                                      '', '', ''];
  const render = () => {
    for (i=0; i < gameboardArr.length; i++){
      gameboardCells[i].textContent = gameboardArr[i];
    }
  };

  return {
    playX,
    playO,
    clear,
    render,
    gameboard,
  };  
})();


const gameplayModule = (() => {
  const board = boardModule;
  
  board.gameboard.addEventListener('click', (event) => {
    
  });
})();

//boardModule.clear();
boardModule.render();

