import React from 'react'
import Knight from './Knight'
import Square from './Square'
import Board from './Board'
import { observe } from './Game'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <DragDropContextProvider backend={HTML5Backend}>
        <Board knightPosition={{ observe }} />
      </DragDropContextProvider>
    </div>
  )
}

export default App
