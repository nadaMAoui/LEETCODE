function ChessBoard(rows) {
  for (let i = 1; i <= rows; i++) {
    if (i % 2 === 0) {
      console.log("# ".repeat(rows / 2));
    } else {
      console.log(" # ".repeat(rows / 2));
    }
  }
}
ChessBoard();
