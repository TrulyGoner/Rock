function fetchRandomUsers() {
    const url = "https://randomuser.me/api/?results=10";               //URL нужной API

    console.log("Загрузка...");

    fetch(url)                                                         //Fetch для получения данных с нужной API
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка сети");                        //Ошибка, если с сетью что-то не так
            }
            return response.json();                                    //Преобразуем ответ в формат JSON
        })
        .then(data => {
            const users = data.results;

            console.log("Список пользователей:");                      // Выводим пользователей в консоль
            users.forEach(user => {
                console.log(`
                    Имя: ${user.name.first} ${user.name.last}
                    Email: ${user.email}
                    Фото: ${user.picture.thumbnail}
                `);
            });
        })
        .catch(error => {                                              //Если возникла ошибка
            console.error("Не удалось загрузить пользователей:", error);
        });
}

fetchRandomUsers();