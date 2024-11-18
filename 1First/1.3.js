function chunkArray(array, size) {
    const newarr = [];                                  //Создаем новый массив для разбиения
    for (let i = 0; i < array.length; i += size) {      //i++ Неправильно, нужно увеличивать на значение разбиваемых массивов
        newarr.push(array.slice(i, i + size));          //В newarr добавляем в конец элементы группировок
    }
    return newarr                                       //Возвращаем новый массив группировки
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));   //Примеры
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); 