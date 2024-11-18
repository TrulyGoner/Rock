class Calculator {
  
	constructor() {
		console.log("Калькулятор готов к работе!");                                     
	}

	add(a,b){ 
        return a + b;
	}

	subtract(a,b){
        return a - b;
	}

	multiply(a,b) {
        return a * b;
	}

	divide(a,b) {
        if (b === 0) {                                                                      //Проверка на 0 при делении
            return "На ноль делить нельзя, попробуйте с другими аргументами";
        };
        return a / b;
	}
}
const calculator = new Calculator();                                                        //Наш экземпляр для начала работы 

console.log("Сложение 5 + 3:", calculator.add(5, 3));                                       //Примеры работы
console.log("Вычитание 10 - 4:", calculator.subtract(10, 4)); 
console.log("Умножение 121 * 15:", calculator.multiply(121, 15)); 
console.log("Деление 8 / 2:", calculator.divide(8, 2)); 
console.log("Деление 25 / 4:", calculator.divide(25, 4)); 
console.log("Деление 5 / 0:", calculator.divide(5, 0)); 
