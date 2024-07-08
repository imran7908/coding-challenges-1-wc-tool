import * as readline from "node:readline/promises";
import * as fs from "node:fs/promises";
import { stdin as input, stdout as output } from "node:process";
import { calculateCLMW, splitWords } from "./helpers/calculateCLMW.js";

const ccwc = async () => {
  const rl = readline.createInterface({ input, output });
  const closeCcwc = () => rl.close();

  //Prompt
  const answer = await rl.question(
    "Please type filename with location following the syntax below:\nSyntax\nccwc [-clmw] [file ...]\n\nOptions\n-c    The number of bytes in each input file is written to the standard output.\n-l    The number of lines in each input file is written to the standard output.\n-m    The number of characters in each input file is written to the standard output.  If the current locale does not support multi-byte character this is equivalent to the -c option.\n-w    The number of words in each input file is written to the standard output.\n"
  );

  //split the words
  const words = splitWords(answer);

  //Is ccwc present
  const isSyntaxValid = words[0] === "ccwc" && words.length > 1 ? true : false;
  if (!isSyntaxValid) {
    console.log("Syntax error");
    closeCcwc();
    return;
  }

  //Check if valid options available or not
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

  //Check if a file exists or not
  for (let i = filesStartIndex; i < words.length; i++) {
    try {
      const contents = await fs.readFile(words[i], { encoding: "utf-8" });
      calculateCLMW(contents);
    } catch (error) {
      console.log(error.message);
    }
  }

  // end prompt
  closeCcwc();
  return;
};

ccwc();
