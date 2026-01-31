interface Prototype<T> {
  clone(): T;
}

class GamePiece implements Prototype<GamePiece> {
  private color: string;
  private size: number;
  private id: number;

  constructor(id: number, color: string, size: number) {
    this.id = id;
    this.color = color;
    this.size = size;
  }

  public getId() {
    return this.id;
  }

  public setColor(color: string) {
    this.color = color;
  }
  clone(): GamePiece {
    return new GamePiece(this.id, this.color, this.size);
  }
}
class GameBoard implements Prototype<GameBoard> {
  private gamePieces: Array<GamePiece> = [];

  public setPiece(piece: GamePiece) {
    this.gamePieces.push(piece);
  }

  public getPieces() {
    return this.gamePieces;
  }

  public updatePiece(id: number) {
    const piece = this.gamePieces.filter((piece) => piece.getId() === id);
    piece[0]?.setColor("Green");
  }

  clone(): GameBoard {
    const copiedBoard = new GameBoard();
    this.gamePieces.forEach((piece) => {
      copiedBoard.setPiece(piece.clone());
    });

    return copiedBoard;
  }
}

const g = new GameBoard();
g.setPiece(new GamePiece(1, "Red", 100));
g.setPiece(new GamePiece(2, "Blue", 200));

console.log(g.getPieces());

const cp = g.clone();
console.log(cp.getPieces());

// Demonstrating the deep copy concept
g.updatePiece(1);
console.log(g.getPieces());
console.log(cp.getPieces());
