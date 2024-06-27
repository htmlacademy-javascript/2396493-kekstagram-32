// Функция для проверки длины строки

const checkRandomString = (string, length) => string.length <= maxLength;

  checkRandomString();

// Функция для проверки строки, является ли она палиндромом
const checkPalindrome = (string) => {
  const stringNormalize = string.toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    reversed += stringNormalize[i];
  }

  return string === reversed;
};

checkPalindrome();
