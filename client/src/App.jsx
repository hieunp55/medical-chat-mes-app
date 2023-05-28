import { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from '@/components';
import '@/App.css';

const apiKey = 'gqe2832v7jzu';
const clientStream = StreamChat.getInstance(apiKey);
const authToken = false;

function App() {
  if (!authToken) return <Auth />;
  
  return (
    <>
      <div className='app__wrapper'>
        <Chat client={clientStream} theme='team light'>
          <ChannelListContainer

          />
          <ChannelContainer

          />
        </Chat>
      </div>
    </>
  );
};

export default App;
