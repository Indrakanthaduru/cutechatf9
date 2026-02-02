'use client';

import { useUIState, useActions } from 'ai/rsc';
import { AI } from './ai';
import { useState } from 'react';

export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage } = useActions<typeof AI>();
  const [conversation, setConversation] = useUIState<typeof AI>();

  return (
    <div>
      <div>
        {conversation.map(message => (
          <div key={message.id}>{message.display}</div>
        ))}
      </div>

      <form
        onSubmit={async e => {
          e.preventDefault();
          setConversation(currentConversation => [
            ...currentConversation,
            { id: 'user-message', display: <div>{inputValue}</div> },
          ]);
          const message = await sendMessage(inputValue);
          setConversation(currentConversation => [...currentConversation, message]);
          setInputValue('');
        }}
      >
        <input
          placeholder="Send a message..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}