import type { AssistantMessageProperty, UserMessageProperty } from './chat-types.tsx';

type InputBoxProperties = {
    text: string;
    onTextChange: (value: string) => void;
    onSend: () => void;
};

export const InputBoxElement = ({ text, onTextChange, onSend }: InputBoxProperties) => {
    return (
        <div className="input-container">
            <textarea
                id='UserInput'
                aria-label="Write your message here"
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                placeholder="Type your message..."
            />

            <button
                className='send-button'
                aria-label='Send your message'
                onClick={onSend}>
                    Send
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
        <div className='assistant message'>
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