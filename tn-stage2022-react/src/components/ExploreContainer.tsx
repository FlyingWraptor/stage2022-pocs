import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../store/slices/messages';
import './ExploreContainer.css';
import MessageList from './MessageList/MessageList';

interface ContainerProps {
  name: string;
}

const ExploreContainer: FC<ContainerProps> = ({ name }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (name === 'Inbox') {
      fetch (`http://localhost:4000/messages`)
        .then(x => x.json())
        .then(x => {
          console.log('Setting Inbox messages')
          dispatch(update(x))
        })
    } else {
      console.log('Clearing messages')
      dispatch(update(null))
    }
  }, [name, dispatch])

  return <div className="container">
      <MessageList folder={name} />
    </div>;
}

export default ExploreContainer;
