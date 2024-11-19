import { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

function usePrevious(value) {                               //Хук для сохранения прошлого значения состояния
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {                                       //Значения для отображения фильтрации
  Все: () => true,
  Незавершенные: (task) => !task.completed,
  Выполненные: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);              

function App(props) {                                     //Управление состоянием
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("Все");

  function toggleTaskCompleted(id) {                      //Переключение статуса выполнения задачи
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {                               //Удаление задачи по идентификатору
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {                        //Редактирование названия задачи
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks                                  //Фильтруем задачи в соответствии с текущим фильтром(тавтология)

    ?.filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {                              //Добавление новой задачи
    if (!name.trim()) {
      alert("Название задачи не может быть пустым!"); 
      return;                                                                       //Выводим сообщение об ошибке, если ввод некорректен.
    }
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = (n) => {                                                        //Склонение 'задач осталось'
    if (n % 100 >= 11 && n % 100 <= 19) {
      return "задач осталось";
    }
    const lastDigit = n % 10;
    if (lastDigit === 1) {
      return "задача осталась";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "задачи остались";
    } else {
      return "задач осталось";
    }
  };
  
  const headingText = `${taskList.length} ${tasksNoun(taskList.length)}`;
  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length < prevTaskLength) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (                                            //Разметка
    <div className="todoapp stack-large">
      <h1>Список дел</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
        role="list"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;