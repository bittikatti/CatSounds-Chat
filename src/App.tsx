import './App.css';

import { InputBox, AssistantMessageElement } from './chat-types.tsx';
import type { AssistantMessage } from './chat-types.tsx';

function App() {
  const initialMessage: AssistantMessage = {
    role: "assistant",
    text: "How may I meow at you today?",
    sound: undefined, // or a string if you have it
  };
  return (
    <>
      <h1>Cat Chat</h1>
      <div className='chat-container'>
        <AssistantMessageElement message={initialMessage}></AssistantMessageElement>
        <InputBox></InputBox>
      </div>
    </>
  )
}

export default App
