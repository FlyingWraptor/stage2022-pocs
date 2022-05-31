import { FC } from 'react';
import { Message } from '../../interfaces/Message';
import MessageBlock from '../MessageBlock/MessageBlock';

import './MessageList.module.css'

interface MessageListProps {
  folder: String,
  messages: Message[],

  deleteHandler: Function
}

const MessageList: FC<MessageListProps> = ({ folder, messages, deleteHandler }) => {

  const deleteMessage = (id: number) => {
    console.log('Deleting', id, 'using handler prop')
    deleteHandler(id)
  }

  return <>
      <h1>{folder}</h1>

      {messages.map((message) => {
        return <MessageBlock key={message.id} message={message} deleteHandler={deleteMessage} />
      })}
    </>
}

export default MessageList;
