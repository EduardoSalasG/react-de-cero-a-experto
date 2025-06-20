import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'

import './index.css'
// import App from './App.jsx'
import { PokemonApp } from './PokemonApp.jsx'
import { TodoApp } from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp></TodoApp>
    </Provider>
  </StrictMode>,
)
