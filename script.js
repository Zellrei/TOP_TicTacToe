const boardModule = (() => {
  let gameboardArr = ['x', 'o', 'x',
                      'o', 'x', 'o',
                      'x', 'o', 'x'];
  const gameboard = document.querySelectorAll('.cell');
  const playX = (a) => gameboardArr[a] = 'x'; 
  const playO = (a) => gameboardArr[a] = 'o'; ;
  const clear = () => gameboardArr = ['', '', '',
                                      '', '', '',
                                      '', '', ''];
  const render = () => {
    for (i=0; i < gameboardArr.length; i++){
      gameboard[i].textContent = gameboardArr[i];
    }
  };

  return {
    playX,
    playO,
    clear,
    render,
  };  
})();

boardModule.render();