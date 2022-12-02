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

  if (map[first] === map[second]) {
    score += 3;
    score += shapeScore[map[second]] as number;
  } else if (map[first] === "Rock" && map[second] === "Paper") {
    score += 6;
    score += shapeScore[map[second]] as number;
  } else if (map[first] === "Paper" && map[second] === "Scissors") {
    score += 6;
    score += shapeScore[map[second]] as number;
  } else if (map[first] === "Scissors" && map[second] === "Rock") {
    score += 6;
    score += shapeScore[map[second]] as number;
  } else {
    score += shapeScore[map[second]] as number;
  }
});
export default (): void => console.log(score);
