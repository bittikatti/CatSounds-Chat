import './App.css'

import { InputBox, AssistantMessage } from './chat-types.tsx'

function App() {

  return (
    <>
      <h1>Cat Chat</h1>
      <div className='chat-container'>
        <AssistantMessage></AssistantMessage>
        <InputBox></InputBox>
      </div>
    </>
  )
}

export default App
