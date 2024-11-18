function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {                  //Если не объект, возвращаем
      return obj;
    }

    if (Array.isArray(obj)) {                                       //Клонируем массив
      return obj.map(deepClone);
    }
  
    return Object.fromEntries(                                      //Преобразуем в объект 
      Object.entries(obj)
        .map(([key, value]) => [key, deepClone(value)])
    );
  }

const original = {                                                  //Пример использования
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const copy = deepClone(original);
copy.address.city = 'Los Angeles';
                                                                    //Примеры работы
console.log(original.address.city);                                 //New York
console.log(original.address.country);
console.log(copy.address.city);                                     // Los Angeles
console.log(original.address.country);