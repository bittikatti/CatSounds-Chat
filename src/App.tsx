import './App.css'

import { InputBox } from './chat-types.tsx'

function App() {

  return (
    <>
      <h1>Cat Chat</h1>
      <div className='chat-container'>
        <InputBox></InputBox>
      </div>
    </>
  )
}

export default App
