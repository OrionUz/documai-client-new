import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';
import ChatIcon from '../components/ChatIcon';

export interface IWidgetMessage {
  text: string;
  sender: 'user' | 'assistant'
}

export type EventType = 'showChat'

const ChatBox = () => {
  const params = useParams()
  const [messages, setMessages] = useState<IWidgetMessage[]>([]);
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    window.addEventListener('message', (e) => {
    })

    return () => window.removeEventListener('message', (e) => {
      console.log('removed', e)
    })
  }, [])

  const sendMessage = async () => {
    if (inputValue.trim() !== '') {
      const response = await sendApiQuestion(inputValue)
      setMessages([...messages, { text: inputValue, sender: 'user' }, { text: response, sender: 'assistant' }]);
      setInputValue('');
    }
  };

  const switchChatWindow = () => {
    emitEvent('showChat', { isOpen: !open, })
    setOpen(val => !val)
  }

  const emitEvent = (type: EventType, payload: any) => {
    const message = JSON.stringify({ type, payload });
    window.parent?.postMessage(message, '*'); // '*' can be replaced with a specific target origin for security
  };

  const sendApiQuestion = async (message: string) => {
    try {
      const response = await fetch("http://localhost:7002/api/chat/widget", { method: 'POST', body: JSON.stringify({
        projectId: params?.projectId,
        question: message
      })})
      return (await response.json())?.message
    } catch (error) {
      return "Internal server occured"
    }
  }
  
  console.log('params?.projectId', params?.projectId)
  return (
    <div style={{
      display: 'flex',
    }}>
      {!open && <ChatIcon onClick={switchChatWindow}/>}
      {open && (<ChatWindow inputValue={inputValue} messages={messages} onChange={setInputValue} sendMessage={sendMessage}/>)}
    </div>
  )
}

export default ChatBox