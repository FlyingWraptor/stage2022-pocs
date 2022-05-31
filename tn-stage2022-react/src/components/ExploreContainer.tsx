import { FC, useEffect, useState } from 'react';
import { Message } from '../interfaces/Message';
import './ExploreContainer.css';
import MessageList from './MessageList/MessageList';

interface ContainerProps {
  name: string;
}

const ExploreContainer: FC<ContainerProps> = ({ name }) => {
  const messageList: Message[] = []
  const [messages, setMessages] = useState(messageList)


  const deleteHandler = (id: Number) => {
    setMessages(messages.filter(x => x.id !== id))
  }

  useEffect(() => {
    if (name === 'Inbox') {
      setMessages([
        {
          id: 1,
          title: 'Your yearly bonus has arrived',
          from: 'support@thebestfridges.com',
          to: 'hubert.poccer@company.tld',
          description: 'Thank you for chosing us, we have added a yearly bonus to you balance!'
        },
        {
          id: 2,
          title: 'Meeting, today at 2PM',
          from: 'nancy.kricketeer@company.tld',
          to: 'hubert.poccer@company.tld',
          description: 'Will you be joining us at the salesmeeting at 2PM this afternoon?'
        },
        {
          id: 3,
          title: 'There are bagels in the cafeteria',
          from: 'gilles.bagel@company.tld',
          to: 'Sales department',
          description: 'My wife made some bagels, I don\'t like them, so I left them in the cafeteria. PLEASE be sure to take one.'
        }
      ])
    } else {
      setMessages([])
    }
  }, [name])

  return <div className="container">
      <MessageList folder={name} messages={messages} deleteHandler={deleteHandler} />
    </div>;
}

export default ExploreContainer;
