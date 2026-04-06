import './App.css'

export function InputBox() {

  return (
    <div className='input-container'>
        <input id='UserInput' />
        <button className='send-button'/>
    </div>
  )
}

export function AssistantMessage({transcript}) {
    return (
        <div className='assistant message'>
            {/* Transcript and the sound */}
            <p>{transcript}</p>
            <div className='sound'></div>
        </div>
    )
}

export function UserMessage() {
    return (
        <div className='user message'>
            <p>Transcript</p>
        </div>
    )
}