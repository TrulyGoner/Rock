function debounce(func, delay) {
    let timeout;                                  

    return function() {
        clearTimeout(timeout);                  //Каждый раз, когда вызывается "обернутая" функция, сбрасывается предыдущий таймер
        timeout = setTimeout(() => {            //Запускается новый таймер, который вызовет функцию func после задержки
            func.apply(this, arguments);        //Выполнение исходной функции с теми же аргументами и заданной задежкой
        }, delay);
    };
}
const debouncedFunction = debounce(() => {      //Пример работы
    console.log('Вызвана функция с задержкой');
    }, 7000);
debouncedFunction();
debouncedFunction();                            // Этот вызов должен сбросить таймер и предотвратить мгновенный вызов функции.

const debouncedFunction1 = debounce(() => {     //Пример работы
    console.log('Задежка 15 сек');
    }, 15000);
debouncedFunction1();
debouncedFunction1();