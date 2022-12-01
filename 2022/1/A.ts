import { readFileSync } from "fs";
const input = readFileSync(__dirname + "/input.txt", "utf-8");

const calories = input
  .split("\n\n")
  .map((str) => str.split("\n").map((num) => parseInt(num)))
  .reduce((acc, v) => {
    const sum = v.reduce((acc, v) => (acc += v), 0);
    acc.push(sum);
    return acc;
  }, []);
export default (): void => {
  console.log(Math.max(...calories));
};
