import { readFileSync } from "fs";

const fileName = "inputs/2022/1.txt";
const input = readFileSync(fileName, { encoding: "utf-8" });

const calories = input
  .split("\n\n")
  .map((str) => str.split("\n").map((num) => parseInt(num)))
  .reduce((acc, v) => {
    const sum = v.reduce((acc, v) => (acc += v), 0);
    acc.push(sum);
    return acc;
  }, []);

const max1 = Math.max(...calories);
const max1Index = calories.indexOf(max1);
calories.splice(max1Index, 1);

const max2 = Math.max(...calories);
const max2Index = calories.indexOf(max2);
calories.splice(max2Index, 1);

const max3 = Math.max(...calories);

const total = max1 + max2 + max3;

export default (): void => console.log(total);
