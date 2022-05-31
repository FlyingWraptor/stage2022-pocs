import { IonButton, IonItem, IonLabel } from '@ionic/react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Message } from '../../interfaces/Message';
import { remove } from '../../store/slices/messages';
import './MessageBlock.module.css';

interface MessageBlockProps {
  message: Message
}

const MessageBlock: FC<MessageBlockProps> = ({ message }) => {
  const dispatch = useDispatch()

  const deleteMessage = () => {
    console.log('Emitting delete message for', message.id)
    dispatch(remove(message.id))
  }

  return <IonItem lines="full">
      <IonLabel>
        <div>
          <h2>{message.title}</h2>
          <span>From: </span>
          <span className="email">{message.from}</span>
          <span> to: </span>
          <span className="email">{message.to}</span>
          <p>{message.description}</p>
        </div>
      </IonLabel>
      <IonButton size="large" onClick={deleteMessage}>
        <span>Delete</span>
      </IonButton>
    </IonItem>
}

export default MessageBlock;
