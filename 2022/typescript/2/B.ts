import { readFileSync } from "node:fs";
const input = readFileSync("inputs/2022/2.txt", { encoding: "utf-8" });

let score = 0;

const map: { [key: string]: string } = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};
const shapeScore: { [key: string]: number } = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const lines = input.split("\n" as string).forEach((line) => {
  const [first, second] = line.split(" ") as [string, string];
  if (second === "X") {
    if (first === "A") {
      score += shapeScore["Scissors"];
    } else if (first === "B") {
      score += shapeScore["Rock"];
    } else {
      score += shapeScore["Paper"];
    }
  } else if (second === "Z") {
    if (first === "A") {
      score += 6;
      score += shapeScore["Paper"];
    } else if (first === "B") {
      score += 6;
      score += shapeScore["Scissors"];
    } else {
      score += 6;
      score += shapeScore["Rock"];
    }
  } else {
    score += 3;
    score += shapeScore[map[first]] as number;
  }
});
export default (): void => console.log(score);
