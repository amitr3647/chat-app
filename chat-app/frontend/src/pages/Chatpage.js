import React, { useEffect, useState } from 'react'

const Chatpage = () => {
    const [chats,setChats] = useState([]);

    useEffect(()=> {
fetchChats();
    },[])

    async function  fetchChats() {
        console.log('fetching chats');
        const response = await fetch('/api/chats');
        // const chats = ;
        setChats(await response.json());
    }
  return (
    <div>
        {chats.map(chat=> {
    //    <p> 'jhj'</p>
          return  <p key={chat._id}>{chat.chatName}</p>
        })}
    </div>
    
  )
}

export default Chatpage