import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Message } from '../../interfaces/Message';
import MessageBlock from '../MessageBlock/MessageBlock';

import './MessageList.module.css'

interface MessageListProps {
  folder: String
}

const MessageList: FC<MessageListProps> = ({ folder }) => {
  const messages = useSelector((state: any) => state.messages).value

  return <>
      <h1>{folder}</h1>
      {messages.map((message: Message) => {
        return <MessageBlock key={message.id} message={message} />
      })}
    </>
}

export default MessageList;
