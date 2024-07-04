import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer = await rl.question(
  "Please type filename with location following the syntax below:\nSyntax\nccwc [-clmw] [file ...]\n\nOptions\n-c    The number of bytes in each input file is written to the standard output.\n-l    The number of lines in each input file is written to the standard output.\n-m    The number of characters in each input file is written to the standard output.  If the current locale does not support multi-byte character this is equivalent to the -c option.\n-w    The number of words in each input file is written to the standard output.\n"
);
const words = answer.split(" ");
console.log(words);
rl.close();
