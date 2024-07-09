export default class Square {  
  constructor(positionX = null, positionY = null) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.nextMoves = [];
  }

  static possibleX = [-2, -2, -1, -1, 1, 1, 2, 2];
  static possibleY = [-1, 1, -2, 2, -2, 2, -1, 1];

  moveList() {
    const x = this.positionX;
    const y = this.positionY;
    let possibleMoves = [];
    for (let i = 0; i < 8; i++) {
      // does not exceed lower grid bounds...
      if (0 <= (x + Square.possibleX[i]) && 0 <= (y + Square.possibleY[i])) {
        // or upper grid bounds
        if (8 > (x + Square.possibleX[i]) && 8 > (y + Square.possibleY[i])) {
          let move = [x + Square.possibleX[i], y + Square.possibleY[i]];
          possibleMoves.push(move);
        }
      }
    }
    return possibleMoves;
  }
}
