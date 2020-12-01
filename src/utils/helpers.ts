const removeDuplicatesFromArr = (array: any[]) => [...new Set(array)];

const stringToArray = (string: string) => string.trim().split(/\s+/);

// reference: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-123.php
const toKebabCase = (string: string) => {
  const matchedStr = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

  if (matchedStr) {
    return matchedStr.map(val => val.toLowerCase()).join('-')
  }

  return string;
}

export { removeDuplicatesFromArr, stringToArray, toKebabCase };