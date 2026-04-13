import { useState } from "react";
import { useEffect } from "react";

import './App.css';

import { AssistantMessageElement, UserMessageElement, InputBoxElement } from './chat/chat-components.tsx';
import type { AssistantMessage, UserMessage, Message } from './chat/chat-types.tsx';

function App() {
  // Accessibility aid for announcing new assistant messages
  const [announcement, setAnnouncement] = useState<string>("");

  // Set session id to cookies
  useEffect(() => {
    fetch("/session_id", {
      credentials: "include"
    });
  }, []);
  
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const getRandomSound = async () => {
    const res = await fetch("/random");
    const data = await res.json();
    const assistantResponseMessage: AssistantMessage = {
      role: "assistant",
      text: data["data"]["Transcript"],
      sound: data["data"]["SoundLink"],
    };
    setMessages(prev => [...prev, assistantResponseMessage]);

    // For screen readers
    setAnnouncement(
      `New assistant message. Transcript: ${assistantResponseMessage.text}. Press PageDown to listen the recording.`
    );
    return;
  };

  const handleAdd = async () => {
    // Atm only adds user messages
    if (!text.trim()) return;
    // TODO: At what point is the assistant message called?

    const newMessage: UserMessage = {
      role: "user",
      text: text,
    };
    setMessages(prev => [...prev, newMessage]);
    setText("");

    await getRandomSound();
  };

  const initialMessage: AssistantMessage = {
    role: "assistant",
    text: "How may I meow at you today?",
    sound: undefined
  };

  // TODO: Icon to scroll down if new messages
  return (
    <>
      <div className='chat-container'>
        <h1 className='header-title'>Cat Chat</h1>
        
        {/* Accessible way to announce new messages */}
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{ position: "absolute", left: "-9999px" }}
        >
          {announcement}
        </div>

        <div className='messages' id='Messages'>
          {/* The start message */}
          <div className='assistant message'>
            <p>{initialMessage.text}</p>
          </div>

          {messages.map((msg, i) => {
            if (msg.role === "user") {
              return <UserMessageElement key={i} message={msg} />
            }
            return <AssistantMessageElement key={i} message={msg} />
          })}

          {/* TODO: Navigation pointer for icon to scroll to newest message */}
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
