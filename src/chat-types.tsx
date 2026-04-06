import './App.css'

export function InputBox() {

  return (
    <div className='input-container'>
        <input id='UserInput' />
        <button className='send-button'/>
    </div>
  )
}

type UserMessage = {
    role: "user";
    text: string;
};

export type AssistantMessage = {
    role: "assistant";
    text: string; // The transcript
    sound?: string; // Optional if not always present
};

type Message = UserMessage | AssistantMessage;

export function AssistantMessageElement({message} : {message: AssistantMessage}) {
    return (
        <div className='assistant message'>
            {/* Transcript and the sound */}
            <p>{message.text}</p>
            <div className='sound'></div>
        </div>
    )
}

export function UserMessageElement() {
    return (
        <div className='user message'>
            <p>Transcript</p>
        </div>
    )
}