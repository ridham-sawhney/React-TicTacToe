import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Title from './components/Title/Title.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('title')).render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>,
)
