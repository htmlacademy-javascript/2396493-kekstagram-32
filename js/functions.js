// Функция для проверки длины строки

const checkRandomString = (string, length) => string.length <= maxLength;

  checkRandomString();

// Функция для проверки строки, является ли она палиндромом
const checkPalindrome = (string) => {
  const cleaned = string.replaceAll(' ', '').toLowerCase();
  const stringNormalize = cleaned.split('').reverse().join('');

  return cleaned === stringNormalize;
};

checkPalindrome();
