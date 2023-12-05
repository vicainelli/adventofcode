import { trebuchet } from "./trebuchet";

const input = Bun.file("src/day-01/input.txt");

const content = await input.text();

const result = trebuchet(content);

console.log(result);
