import './App.css'

export function InputBox() {

  return (
    <div className='input-container'>
        <textarea id='UserInput' aria-label='Write your message here' />
        <button className='send-button' aria-label='Send your message'>Send</button>
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
            {/* TODO: What to do with the sound? */}
            <div className='sound'></div>
        </div>
    )
}

export function UserMessageElement({message} : {message: UserMessage}) {
    return (
        <div className='user message'>
            <p>{message.text}</p>
        </div>
    )
}