const splitWordsRegExp = /\s{1,}/;

export const splitWords = (contents) => {
  const splittedWords = contents.trim().split(splitWordsRegExp);
  return splittedWords;
};

export const calculateCLMW = (contents) => {
  const totalLines = contents.split("\n").length - 1;
  console.log("lines: ", totalLines);
  const totalWords = splitWords(contents).length;
  console.log("words: ", totalWords);
};
