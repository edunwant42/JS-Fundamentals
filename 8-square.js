function printSquareNested(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "X";
    }
    console.log(row);
  }
}

function printSquareRepeat(n) {
  const line = "X".repeat(n);
  for (let i = 0; i < n; i++) {
    console.log(line);
  }
}

const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
    printSquareRepeat(size); 
    // or switch to use nested loops implementation by uncommenting the next line and commenting the previous one
    // printSquareNested(size);
}
