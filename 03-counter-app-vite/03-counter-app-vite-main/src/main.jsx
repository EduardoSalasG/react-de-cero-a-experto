import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp/CounterApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterApp value={4} />
        {/* <FirstApp/> */}
        {/* <HelloWorldApp></HelloWorldApp> */}
    </StrictMode>
)