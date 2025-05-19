const args = process.argv.slice(2);

// parseInt returns NaN if conversion fails
const res = parseInt(args[0]);

if (isNaN(res)) {
    console.log("Not a number");
} else {
    console.log("My number: " + res);
}
