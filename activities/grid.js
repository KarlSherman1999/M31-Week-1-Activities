console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")

let grid = [
    ["o", "|", "o", "|", "o"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
];
console.log(grid);

if ((grid[0][0] == "x" && grid[0][2] == "x" && grid[0][4] == "x") || (grid[0][0] == "o" && grid[0][2] == "o" && grid[0][4] == "o")){
    console.log("Winner");
} else if ((grid[1][0] == "x" && grid[1][2] == "x" && grid[1][4] == "x") || (grid[1][0] == "o" && grid[1][2] == "o" && grid[1][4] == "o")){
    console.log("Winner");
}
// messy if statement