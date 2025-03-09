function reverseString(string) {
  let maxIndex = string.length - 1;
  let reversedString = "";
  const letters = string.split("");

  while (maxIndex >= 0) {
    reversedString += letters[maxIndex];
    maxIndex -= 1;
  }

  return reversedString;
}

module.exports = reverseString;
