/* global game */

game.minPlayers = game.maxPlayers = 1;

game.initialVariables = {
  winner: null,
  correct: Math.floor(Math.random() * 10) + 1,
  guesses: 0
};

['#TL', '#TC', '#TR', '#ML', '#MC', '#MR', '#BL', '#BC', '#BR'].forEach(s => game.board.addSpace(s, 'square'));
['#X', '#O'].forEach(p => game.board.addPieces(9, p, 'mark'));

game.hide('correct');

game.moves = {
  guess: number => {
    if (number === String(game.get('correct'))) {
      game.phase = 'finished'
      game.set('winner', game.player)
    } else {
      game.set('guesses', game.get('guesses') + 1)
      game.endTurn()
    }
  }
}
