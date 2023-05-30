import { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from '@/components';
import '@/App.css';
import 'stream-chat-react/dist/css/index.css';

const cookies = new Cookies();
const apiKey = 'gqe2832v7jzu';
const authToken = cookies.get("token");

const chatClient = StreamChat.getInstance(apiKey);

if (authToken) {
  console.log(cookies);
  // That is the way gstream chat create or update user 
  // Must contain id
  chatClient.connectUser({
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    id: cookies.get('userId'),
    phoneNumber: cookies.get('phoneNumber'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword')
  }, authToken);
}

function App() {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />;
  
  return (
    <>
      <div className='app__wrapper'>
        <Chat client={chatClient} theme='team light'>
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
          />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
        </Chat>
      </div>
    </>
  );
};

export default App;
