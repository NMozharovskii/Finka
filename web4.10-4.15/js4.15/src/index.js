import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comment from './class';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Comment text="hello mzfkrs" date="21/05/2022" author={{name: "Nikita", avatarUrl: "https://sun9-73.userapi.com/s/v1/if1/5VU3chDwSnM25vFcV56FQM-VgctjEayKDKmzMokZpmV1T4cA50_00VIQz6OnPFgzEDNBRHXj.jpg?size=1280x778&quality=96&type=album"}} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
