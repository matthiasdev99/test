import { getBlanks, type Field } from "../game";
import { randomMove, winningMove } from "./bot";

// the easy bot:
// - chooses the winning move, if it can win
// - chooses a random move otherwise
export function easyMove(board: Field[], own: Field): number {
  let potentiallyMove = winningMove(board, own);

  if(potentiallyMove !== -1){
    return potentiallyMove;
  }

  let emptyFields = getBlanks(board);
  let move = emptyFields[randomMove(emptyFields.length)];
  return move;
  
}
