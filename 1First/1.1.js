function isPalindrome(str) {
    const original = str.toString().toLowerCase().replace(/\s+/g, '');  //Переводим в строку, переводим в нижний регистр, убираем пробелы
    const reversed = original.split('').reverse().join('');             //Разворачиваем 
    return original === reversed;                                       //Возвращаем результат сравнения
};


console.log(isPalindrome("А роза упала на лапу Азора"));                //Примеры работы
console.log(isPalindrome("Привет"));
console.log(isPalindrome(5995));
console.log(isPalindrome(5935));