import { marker } from "types";
import service from "./check4Winner";

describe("game service", () => {
  it("should correctly determine the winner", () => {
    const board: marker[] = ["X", "X", "X", "O", "X", "O", "O", "X", "O"];

    expect(service(board, "O")).toBe(false);
    expect(service(board, "X")).toBe(true);
  });

  it("should not report a winner if there is none", () => {
    const board: (marker | "")[] = ["X", "O", "", "", "", "", "O", "X", ""];

    expect(service(board, "O")).toBe(false);
    expect(service(board, "X")).toBe(false);
  });
});
