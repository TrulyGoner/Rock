function fizzBuzz(n) {
    let number = [];                   //Тк нельзя использовать return в цикле(он завершится при первой итерации return) нужно ввести массив, который будет заполняться числами и FizzBuzz
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            number.push('FizzBuzz');   //При кратности 3 и 5
        } else if (i % 3 === 0) {
            number.push('Fizz');       //При кратности 3
        } else if (i % 5 === 0) {
            number.push('Buzz');       //При кратности 5
        } else {
            number.push(i.toString()); //Просто добавляем число, если не подошло по условиям
        }
    }
    return number;
};

console.log(fizzBuzz(100));  //Пример для числа n = 100