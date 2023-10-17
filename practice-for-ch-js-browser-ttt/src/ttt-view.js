class View {
  constructor(game, el) {
    this.game = game 
    this.el = el
  }
  
  setupBoard() {

    let board = document.createElement("ul")
    const grid = Array(3).fill().map(() => Array(3).fill());

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        const tile = document.createElement('li')
        let pos = [i, j]
        tile.setAttribute('pos', [i,j])
        board.appendChild(tile)
      }
    }

    this.el.appendChild(board)
    board.addEventListener("click", this.handleClick.bind(this))
  }
  
  handleClick(e) {
    let tilePos = e.target.getAttribute("pos").split(",")
    // let arrayPos = Array.from(tilePos)
    debugger
    this.game.playMove(tilePos)
    e.target.innerText = this.game.currentPlayer
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;