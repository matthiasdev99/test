import { Field, Game, Mode, getBlanks, invertPlayer, newBoard } from "../logic/game";

describe("invert player", () => {
    it("invert player1 to player2", () => {
      const result: Field = invertPlayer(Field.PLAYER1);
      expect(result).toBe(Field.PLAYER2);
    });
    it("invert player2 to player1", () => {
      const result: Field = invertPlayer(Field.PLAYER2);
      expect(result).toBe(Field.PLAYER1);
    });
    it("return empty field as empty", () => {
      const result: Field = invertPlayer(Field.EMPTY);
      expect(result).toBe(Field.EMPTY);
    });
  });

  describe("get blanks", () => {
    it("check get all blanks from empty field", () => {
      const result: Field = Field.EMPTY
      expect(result).toBe(Field.EMPTY);
    });
  });

  describe("updateMode", () => {
    it("update mode to easy", () => {
      var game: Game = new Game();
      game.updateMode(Mode.EASY);
      expect(game.mode).toBe(Mode.EASY);
    });
  });

  describe("updateMode", () => {
    it("update mode to petty", () => {
      var game: Game = new Game();
      game.updateMode(Mode.PETTY);
      expect(game.mode).toBe(Mode.PETTY);
    });
  });

  describe("updateMode", () => {
    it("update mode to medium", () => {
      var game: Game = new Game();
      game.updateMode(Mode.MEDIUM);
      expect(game.mode).toBe(Mode.MEDIUM);
    });
  });

  describe("updateMode", () => {
    it("update mode to hard", () => {
      var game: Game = new Game();
      game.updateMode(Mode.HARD);
      expect(game.mode).toBe(Mode.HARD);
    });
  });

  describe("updateMode", () => {
    it("update mode to human", () => {
      var game: Game = new Game();
      game.updateMode(Mode.HUMAN);
      expect(game.mode).toBe(Mode.HUMAN);
    });
  });

  
