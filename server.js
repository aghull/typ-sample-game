/* global game */

game.minPlayers = 1;
game.maxPlayers = 10;

game.setupPlayerMat = mat => {
  mat.addSpace('#look-at', 'area');
  mat.addSpace('#tableau', 'area');
  mat.addSpace('#hand', 'area');
};

game.setupBoard = board => {
  game.playerMat(1).find('#hand').addPiece('#Abe', 'card');
  game.playerMat(2).find('#hand').addPiece('#Isaac', 'card');
  const shop = board.addSpace('#shop', 'area');
  shop.addPiece('#1-Up', 'card');
};

game.hidden = () => `card[flipped], #player-mat:not(.mine) #hand card`;

game.play = async () => {
  game.playersMayAlwaysMove('card');
  const allActions = Object.keys(game.actions);
  while(true) {
    await game.anyPlayerPlay(allActions);
  }
};

game.actions = {
  flip: {
    select: "card",
    prompt: "Flip this card",
    action: card => card.set('flipped', !card.get('flipped'))
  },
  activate: {
    select: "card:not([active]):not([flipped])",
    prompt: "Activate this card",
    action: card => card.set('active', true)
  },
  deactivate: {
    prompt: "Deactivate this card",
    select: "card[active]:not([flipped])",
    action: card => card.set('active', false)
  },
  play: {
    prompt: "Play this card onto your board",
    drag: ".mine #hand card",
    onto: ".mine #tableau"
  },
  remove: {
    prompt: "Put this card back in your hand",
    promptOnto: "Which hand",
    drag: "#tableau card",
    onto: "#hand",
  },
};
