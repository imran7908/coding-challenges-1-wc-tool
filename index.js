import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const ccwc = async () => {
  const rl = readline.createInterface({ input, output });
  const closeCcwc = () => rl.close();

  const answer = await rl.question(
    "Please type filename with location following the syntax below:\nSyntax\nccwc [-clmw] [file ...]\n\nOptions\n-c    The number of bytes in each input file is written to the standard output.\n-l    The number of lines in each input file is written to the standard output.\n-m    The number of characters in each input file is written to the standard output.  If the current locale does not support multi-byte character this is equivalent to the -c option.\n-w    The number of words in each input file is written to the standard output.\n"
  );
  const trimmedAnswer = answer.trim();
  const regExp = /\s{1,}/;
  const words = trimmedAnswer.split(regExp);

  const isSyntaxValid = words[0] === "ccwc" && words.length > 1 ? true : false;
  if (!isSyntaxValid) {
    console.log("Syntax error");
    closeCcwc();
    return;
  }

  const optionRegExp = /\-[c,l,m,w]+/;
  let filesStartIndex = 1;
  if (words[1].startsWith("-")) {
    if (words[1].match(optionRegExp)) {
      filesStartIndex = 2;
    } else {
      console.log("illegal option");
      closeCcwc();
      return;
    }
  }
  console.log("Go on");

  // end prompt
  closeCcwc();
  return;
};

ccwc();
