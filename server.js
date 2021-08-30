/* global game */

game.minPlayers = 1;
game.maxPlayers = 10;

game.initialVariables = {
  winner: null,
  correct: Math.floor(Math.random() * 10) + 1,
  guesses: 0
};

game.setup = () => {
  ['#TL', '#TC', '#TR', '#ML', '#MC', '#MR', '#BL', '#BC', '#BR'].forEach(s => game.board.addSpace(s, 'square'));
  ['#X', '#O'].forEach(p => game.board.addPiece(p, 'mark', {x:100, y:100}));
  game.board.find('#TC').addPiece('#X', 'mark', {x:0, y:0});
  game.board.find('#TL').addPiece('#O', 'mark', {x:0, y:0});
}

game.play = async () => {
  game.playersMayAlwaysMove('mark');
  while(true) {
    await game.anyPlayerPlay([]);
  }
}
