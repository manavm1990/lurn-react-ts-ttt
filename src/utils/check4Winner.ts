import { marker } from "types";

const WINNING_INDICES = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

export default (board: (marker | "")[], letter: marker): boolean =>
  WINNING_INDICES.some((winningIndices) =>
    winningIndices.every((winningIndex) => board[winningIndex] === letter)
  );
