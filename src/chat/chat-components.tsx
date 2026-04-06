import type { AssistantMessage, UserMessage } from './chat-types.tsx';

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