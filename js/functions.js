//Функция для проверки длины строки
const isLessOrEqual = (string, length) => string.length <= length;
//Вызов функции
isLessOrEqual('проверяемая строка', 20);
isLessOrEqual('проверяемая строка', 18);
isLessOrEqual('проверяемая строка', 10);

//Функция для проверки строки на палиндромом.
const isPalindrom = (string) => {
  const tempString = string.toLowerCase();
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};
//Вызов функции
isPalindrom ('кекс');
isPalindrom ('ДовОд');
isPalindrom ('топот');

//Функция для извлечения цифр
const extractNumber = (string) => {
  if (typeof string === 'number'){
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++){
    if (!Number.isNaN(parseInt(string.at(i), 10))){
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
//Вызов функции
extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');

//Функция, которая принимает три параметра
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);

  const TempRepeat = pad.repeat(actualPad / pad.length);

  return tempPad + TempRepeat + string;
};
//Вызов функции
myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');
