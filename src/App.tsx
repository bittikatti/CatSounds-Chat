import { useState } from "react";

import './App.css';

import { AssistantMessageElement, UserMessageElement, InputBoxElement } from './chat/chat-components.tsx';
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
      <div className='chat-container'>
        <h1 className='header-title'>Cat Chat</h1>
        <div className='messages' id='Messages'>
          <AssistantMessageElement message={initialMessage}></AssistantMessageElement>

          {messages.map((msg, i) => (
            <UserMessageElement key={i} message={msg} />
          ))}
        </div>
        <InputBoxElement
          text={text}
          onTextChange={setText}
          onSend={handleAdd}
        />
      </div>
    </>
  )
}

export default App
