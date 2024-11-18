function debounce(func, delay) {
    let timeout;                                  

    return function() {
        clearTimeout(timeout);                  //Каждый раз, когда вызывается "обернутая" функция, сбрасывается предыдущий таймер
        timeout = setTimeout(() => {            //Запускается новый таймер, который вызовет функцию func после задержки
            func.apply(this, arguments);        //Выполнение исходной функции с теми же аргументами и заданной задежкой
        }, delay);
    };
}