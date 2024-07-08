const splitWordsRegExp = /\s{1,}/;

export const splitWords = (contents) => {
  const splittedWords = contents.trim().split(splitWordsRegExp);
  return splittedWords;
};

export const calculateLMW = (contents) => {
  const totalLines = contents.split("\n").length - 1;
  const totalWords = splitWords(contents).length;
  const totalCharacters = contents.split("").length;
  return { totalLines, totalWords, totalCharacters };
};
