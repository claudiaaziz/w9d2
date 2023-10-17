import View from "./ttt-view";
import Game from "../ttt_node/game";


document.addEventListener("DOMContentLoaded", () => {
  const game = new Game (); 
  const figure = document.querySelector("figure[class='ttt']");
  const view = new View (game, figure)
  view.setupBoard()
});

