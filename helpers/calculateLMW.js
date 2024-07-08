const splitWordsRegExp = /\s{1,}/;

export const splitWords = (contents) => {
  const splittedWords = contents.trim().split(splitWordsRegExp);
  return splittedWords;
};

export const calculateLMW = (contents) => {
  const totalLines = contents.split("\n").length - 1;
  console.log("lines(l): ", totalLines);
  const totalWords = splitWords(contents).length;
  console.log("words(w): ", totalWords);
  const totalCharacters = contents.split("").length;
  console.log("characters(m): ", totalCharacters);
};
