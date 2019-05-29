import React from 'react'
import ReactDOM from 'react-dom'
import ChessDND from './ChessDND'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './App.css'

function App() {
  return (
    <div className="App">
      <DragDropContextProvider backend={HTML5Backend}>
        <ChessDND />
      </DragDropContextProvider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
