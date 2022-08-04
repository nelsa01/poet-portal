import React from 'react'
import { ChatMessage } from './Chat-messages'
import Contact from '../Chat/Contact/Contact'
import App from './Contact/Header'
import Messagecard from './Message-card/Messagecard'
import Messagelist from './Message-list/Messagelist'
import { Nav } from './Nav/Navigation'

function Chat() {
  return (
    <div>
      <ChatMessage />
      <Contact />
      <App />
      <Messagecard />
      <Messagelist />
      <Nav />
    </div>
  )
}

export default Chat