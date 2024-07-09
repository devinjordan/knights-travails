import Square from "./square.js"

// Hypothesis: The furthest depth will be 6
export default function addNextMoves(position) {
  let curr = new Square(position[0], position[1]);
  let moves = curr.moveList();
  console.log(moves);
  for (let i = 0; i < moves.length; i++) {
    curr.nextMoves.push(new Square(moves[i][0], moves[i][1]));
  }
  console.log(curr.nextMoves)
}

