class View {
  constructor(game, el) {
    this.game = game 
    this.el = el
  }
  
  setupBoard() {

    let board = document.createElement("ul")

    for (let i = 0; i < 9; i++) {
        const tile = document.createElement('li')
        tile.setAttribute('data-pos', i)
        board.appendChild(tile)
    }

    this.el.appendChild(board)

  }
  
  handleClick(e) {
    
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;