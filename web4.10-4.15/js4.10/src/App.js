import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [fruitState, setFruitState] = useState(1);
  const [fruit, setFruit] = useState('банан');
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);

  const handleInputChange = (e) => {
    const {id, value} = e.target
    setInput(value)
  }

  return (
    <div className="App">
      <p>Вы нажали {count} раз!</p>
      <button onClick={() => {setCount(count + 1)}}>
        Нажми меня!
      </button>

      {
        fruitState ? <div>
          <p>Тут лежит {fruit}</p>
          <button onClick={() => {
            setFruit("Вы отправили банан)");
            setFruitState(0);
            }}>
            Возьми {fruit}:)
          </button>
        </div> : <div>
            <p>{fruit}</p>
            <button onClick={() => {
              setFruit("банан");
              setFruitState(1);
            }}>
              Сброс)
            </button>
        </div> 
      }

      <div>
        <p>Тут лежит:</p>
        <p>{todos[0]['text']}</p>
        <input placeholder='Напиши' value={input} onChange={(e) => handleInputChange(e)} />
        <button onClick={() => {
          setTodos([{ text: input }])
        }}>
          Изменить хук.
        </button>

      </div>
    </div>
  );
}

export default App;
