import './App.css';

import { AssistantMessageElement, UserMessageElement } from './chat/chat-components.tsx';
import type { AssistantMessage, UserMessage } from './chat/chat-types.tsx';

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
        <div className='messages' id='Messages'>
          <AssistantMessageElement message={initialMessage}></AssistantMessageElement>
        </div>
        <div className='input-container'>
          <textarea id='UserInput' aria-label='Write your message here' />
          <button className='send-button' aria-label='Send your message'>Send</button>
        </div>
      </div>
    </>
  )
}

export default App
