const boardModule = (() => {
  let gameboardArr = ['x', 'o', 'x',
                      'o', 'x', 'o',
                      'x', 'o', 'x'];
  const gameboard = document.getElementById('gameboard');
  const gameboardCells = document.querySelectorAll('.cell');
  const startBtn = document.getElementById('start-btn');

  let clickedCell = "";
  
  startBtn.addEventListener('click', (event) => {
    clear();
    render();
  });

  for (let i = 0; i<9; i++) {
    gameboardCells[i].addEventListener('click', (event) => {
        clickedCell = i;
        console.log('clicked ', i);
        console.log(clickedCell);
        boardModule.playX(clickedCell);
        boardModule.render();
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





boardModule.clear();
boardModule.render();

