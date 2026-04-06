import type { AssistantMessageProperty, UserMessageProperty } from './chat-types.tsx';

export const AssistantMessageElement = ({message}: AssistantMessageProperty) => {
    return (
        <div className='assistant message'>
            {/* Transcript and the sound */}
            <p>{message.text}</p>
            {/* TODO: What to do with the sound? */}
            <div className='sound'></div>
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