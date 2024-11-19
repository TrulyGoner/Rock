import { useState } from "react";

function Form(props) {                      //Форма для добавления новой задачи
  const [name, setName] = useState('');

  function handleSubmit(event) {            //Обработчик задачи отправки
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(event) {            //Обработчик изменения текста задачи
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Какие у вас планы?
        </label>
      </h2>
                                          {/*Кнопка для отправки формы */}
      <input                              
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Добавить
      </button>
    </form>
  );
}

export default Form;