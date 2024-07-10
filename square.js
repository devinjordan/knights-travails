export default class Knight {  
  constructor() {
    this.pastMove = null;
  }

  static possibleX = [-2, -2, -1, -1, 1, 1, 2, 2];
  static possibleY = [-1, 1, -2, 2, -2, 2, -1, 1];

  findPath(start, end, queue = [start]) {

    let curr = start;
    // search iteratively by level until a match is found
    while (queue.length) {
      curr = queue.shift();
      if (curr[0] === end[0] && curr[1] === end[1]) break;
      const moves = this.nextMoves(curr);
      moves.forEach(move => {
        queue.push(move);
        move.pastMove = curr;
      });
    };

    let path = [];
    while (curr.pastMove) {
      path.unshift(curr);
      curr = curr.pastMove;
    };

    console.log(path);
    return;
  }

  nextMoves([x, y], possibleMoves = []) {
    for (let i = 0; i < Knight.possibleX.length; i++) {
      let newX = x + Knight.possibleX[i];
      let newY = y + Knight.possibleY[i];
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        possibleMoves.push([newX, newY]);
      }
    }
    return possibleMoves;
  }
}
