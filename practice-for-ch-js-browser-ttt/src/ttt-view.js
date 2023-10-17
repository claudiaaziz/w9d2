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
    
    // let arrayPos = Array.from(tilePos)
    // debugger
    // this.game.makeMove(tilePos)
    this.makeMove(e.target)
    // e.target.innerText = this.game.currentPlayer
    
  }

  makeMove(square) {

    square.classList.add("selected")
    let tilePos = square.getAttribute("pos").split(",").map(el => parseInt(el))
    this.game.playMove(tilePos)
    square.innerText = this.game.currentPlayer

    if  (this.game.winner()) {
      this.handleGameOver()
    }
  }
  
  handleGameOver() {
      winMessage.classList.add("win")
      winMessage.classList.remove("hidden")  
  }

}
export default View;