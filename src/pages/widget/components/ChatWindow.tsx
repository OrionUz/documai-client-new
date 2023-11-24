import React from 'react'
import { Layout, Avatar, Typography, Input, Button } from 'antd';
import { IWidgetMessage } from '../[id]';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

interface IProps {
  messages: IWidgetMessage[]
  inputValue: string;
  onChange: (text: string) => void;
  sendMessage: () => void;
}
const ChatWindow = (props: IProps) => {
  const { messages } = props
  return (
    <Layout style={{ position: 'absolute', bottom: 0, right: 0, height: 680, width: 384 }}>
    <Header className='flex flex-row items-center justify-between bg-[color] p-4'>
      <Title level={4} className="m-0 text-white">Brian AI</Title>
      <Avatar size="large" src="path_to_avatar_image" className="mr-2"  />
    </Header>
    <Content style={{ padding: '0 24px', overflow: 'auto',  }}>
    <div className="flex flex-col">
      {messages.map((message, index) => (
      <div
        key={index}
        style={{
          backgroundColor: message.sender === 'user' ? 'green': 'blue',
          margin: 10,
          marginLeft: message.sender === 'user' ? 'auto': 0,
          padding: 3,
          width: '60%'
        }}
      >
        <div style={{ fontSize: 50}}>{message.text}</div>
      </div>
    ))}
      </div>
    </Content>

    <Footer>
      <Input
        value={props.inputValue}
        onChange={e => props.onChange(e.target.value)}
        onPressEnter={props.sendMessage}
      />
      <Button onClick={props.sendMessage}>Send</Button>
    </Footer>
  </Layout>
  )
}

export default ChatWindow