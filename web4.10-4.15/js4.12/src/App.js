import "./App.css";
import React, { useState } from "react";

export default function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("банан");
  const [todos, setTodos] = useState([{ text: "Изучить хуки?" }]);

  console.log(todos[0]["text"]);
  return (
    <div class="carder">
      <div class="card">
        <div class="first-card">
          <div class="text-on-card">Телефон</div>
          <img
            class="img-card"
            src="https://3dnews.ru/assets/external/illustrations/2019/06/04/988609/siemens-a35.jpg"
          ></img>
        </div>

        <button class="second-card" onClick={() => setCount(count + 2590)}>
          <div class="img-card-tw"></div>
          <div class="card-price">2.590 ₽</div>
        </button>
      </div>
      <div class="card2">
        <div class="first-card">
          <div class="text-on-card">Квас</div>
          <img
            class="img-card"
            src="https://roscontrol.com/wp-content/uploads/2021/09/cf540bf041295ede9c5c.jpg"
          ></img>
        </div>

        <button class="second-card2" onClick={() => setCount(count + 1560)}>
          <div class="img-card-tw"></div>
          <div class="card-price">1.560 ₽</div>
        </button>
      </div>
      <div class="card3">
        <div class="first-card">
          <div class="text-on-card">Дикобраз</div>
          <img
            class="img-card"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0ZFWVj3qknP55q3LBX1Jgnw1YR7MsiMEnY7l5wZYSU-7VYr70LQoGSyp-W_d1kNsPQY&usqp=CAU"
          ></img>
        </div>

        <button class="second-card3" onClick={() => setCount(count + 1000)}>
          <div class="img-card-tw"></div>
          <div class="card-price">1.000 ₽</div>
        </button>
      </div>
      <div class="card4">
        <div class="first-card">
          <div class="text-on-card">Димас</div>
          <img
            class="img-card"
            src="https://sun9-1.userapi.com/s/v1/ig2/Ba9CovHWeXKCE9koiWTxAODAChZ00v6dO59to9tmyKQVjFLFxgAUz9V70h9UwASztQ8zYlhNhZYv3lYCCcJYM5mC.jpg?size=1174x1174&quality=96&type=album"
          ></img>
        </div>

        <button class="second-card4" onClick={() => setCount(count + 9999)}>
          <div class="img-card-tw"></div>
          <div class="card-price"> ∞ ₽</div>
        </button>
      </div>
      <div class="card5">
        <div class="first-card">
          <div class="text-on-card">Табуретка</div>
          <img
            class="img-card"
            src="data:image/jpeg;base64,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"
          ></img>
        </div>

        <button class="second-card5" onClick={() => setCount(count + 9500)}>
          <div class="img-card-tw"></div>
          <div class="card-price">9.500₽</div>
        </button>
      </div>
      <div class="card6">
        <div class="first-card">
          <div class="text-on-card">Бутер</div>
          <img
            class="img-card"
            src="data:image/jpeg;base64,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"
          ></img>
        </div>

        <button class="second-card6" onClick={() => setCount(count + 15)}>
          <div class="img-card-tw"></div>
          <div class="card-price">15000₽</div>
        </button>
      </div>
      <div class="itog">
        <p class="price">Итоговая стоимость: {count} ₽</p>
      </div>
    </div>
  );
}
