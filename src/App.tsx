import { useState } from "react";

import './App.css';

import { AssistantMessageElement, UserMessageElement } from './chat/chat-components.tsx';
import type { AssistantMessage, UserMessage } from './chat/chat-types.tsx';

function App() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<UserMessage[]>([]);

  const handleAdd = () => {
    // Atm only adds user messages
    if (!text.trim()) return;

    const newMessage: UserMessage = {
      role: "user",
      text: text,
    };

    setMessages([...messages, newMessage]);
    setText("");
  };

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
          {messages.map((msg, i) => (
            <UserMessageElement key={i} message={msg} />
          ))}
        </div>
        <div className='input-container'>
          <textarea
            id='UserInput'
            aria-label='Write your message here'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type your message...'/>
          
          <button
            className='send-button'
            aria-label='Send your message'
            onClick={handleAdd}>
              Send
          </button>
        </div>
      </div>
    </>
  )
}

export default App
