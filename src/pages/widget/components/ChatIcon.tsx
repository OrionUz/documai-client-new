import React from 'react';

const ChatIcon = ({ onClick }: {onClick: () => void}) => {
  return (
    <div onClick={onClick} style={{
      width: 50,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 100,
      position: 'absolute',
      bottom: 0,
      right: 0
    }}/>
  );
};

export default ChatIcon;
