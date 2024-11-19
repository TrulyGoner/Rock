import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [];                                                //Инициализация массива для задач

ReactDOM.createRoot(document.getElementById('root')).render(    // Создание корневого узла для React-приложения
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)