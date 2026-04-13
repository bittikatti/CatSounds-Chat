import { useRef } from "react";
import type { AssistantMessageProperty, UserMessageProperty } from './chat-types.tsx';

type InputBoxProperties = {
    text: string;
    onTextChange: (value: string) => void;
    onSend: () => void;
};

export const InputBoxElement = ({ text, onTextChange, onSend }: InputBoxProperties) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const handleSend = ()=> {
        onSend();

        // move focus back to textarea
        textareaRef.current?.focus();
    }
    return (
        <div className="input-container">
            <textarea
                ref={textareaRef} // To move cursor here after sending message
                id='UserInput'
                aria-label="Write your message here"
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                placeholder="Type your message..."
            />

            <button
                className='send-button'
                aria-label='Send your message'
                onClick={handleSend}>
                    {/* The icon is from here: https://icons.getbootstrap.com/icons/send-fill/ */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16" aria-hidden='true'>
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                </svg>
            </button>
        </div>
    );
};

type SoundLinkProperty = {
    soundLink: string;
};

const SoundElement = ({soundLink}: SoundLinkProperty) => {
    // Make element for sound to be listened.
    const src = `/cdn?cdn=${encodeURIComponent(soundLink)}`;
    return (
        <div className='sound'>
            <audio controls src={src} />
        </div>
    )
}

export const AssistantMessageElement = ({message}: AssistantMessageProperty) => {
    return (
        <div className='assistant message' tabIndex={0}>
            {/* Transcript and the sound */}
            <p>Transcript: [{message.text}]</p>
            {/* TODO: Need to call the sound from the worker api */}
            {message.sound && (
                <SoundElement soundLink={message.sound}/>
            )}
        </div>
    )
}

export const UserMessageElement = ( {message}: UserMessageProperty) => {
    return (
        <div className='user message'>
            <p>{message.text}</p>
        </div>
    )
}