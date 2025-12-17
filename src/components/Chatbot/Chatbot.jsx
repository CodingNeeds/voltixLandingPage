import { useState, useRef, useEffect } from 'react'
import styles from './Chatbot.module.css'

// =============================================================================
// CONFIGURATION
// =============================================================================
const CHATBOT_CONFIG = {
  // n8n Webhook URL
  webhookUrl: 'http://localhost:5678/webhook/97407cd4-fc17-4185-9344-9dcc83f41fe9',
  
  // Initial greeting message
  welcomeMessage: "Hi! 👋 I'm VOLTIX Assistant. I'm here to help you learn about the VOLTIX Pro 10K Magnetic Wireless Power Bank. What would you like to know?",
  
  // Bot name displayed in chat
  botName: 'VOLTIX Assistant',
  
  // Placeholder text for input
  inputPlaceholder: 'Ask about the VOLTIX Pro 10K...',
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: CHATBOT_CONFIG.welcomeMessage,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setError(null)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    
    const userMessage = inputValue.trim()
    if (!userMessage || isLoading) return

    // Add user message to chat
    const userMsg = {
      id: Date.now(),
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setIsLoading(true)
    setError(null)

    try {
      // Send message to n8n webhook
      const response = await fetch(CHATBOT_CONFIG.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      // Get bot response from n8n (expects { output: "..." })
      const botResponse = data.output || data.response || data.message || data.text || 'I received your message but couldn\'t generate a response.'
      
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMsg])
      
    } catch (err) {
      console.error('Chatbot error:', err)
      setError('Sorry, I\'m having trouble connecting. Please try again or contact support.')
      
      // Add error message to chat
      const errorMsg = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'I\'m sorry, I\'m having trouble connecting right now. Please try again in a moment, or contact our support team directly at support@voltixpower.com',
        timestamp: new Date(),
        isError: true
      }
      
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  // Quick action buttons for common questions
  const quickActions = [
    'What are the specs?',
    'Is it airline safe?',
    'How fast does it charge?',
    'What\'s included?'
  ]

  const handleQuickAction = (question) => {
    setInputValue(question)
    inputRef.current?.focus()
  }

  return (
    <div className={styles.chatbotContainer}>
      {/* Chat Toggle Button */}
      <button 
        className={`${styles.chatToggle} ${isOpen ? styles.open : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className={styles.toggleLabel}>Chat</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.botAvatar}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.botName}>{CHATBOT_CONFIG.botName}</h3>
              <span className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                Online
              </span>
            </div>
          </div>
          <button 
            className={styles.closeButton}
            onClick={toggleChat}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className={styles.messagesContainer}>
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`${styles.message} ${styles[message.type]} ${message.isError ? styles.error : ''}`}
            >
              {message.type === 'bot' && (
                <div className={styles.messageAvatar}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              )}
              <div className={styles.messageContent}>
                <p>{message.content}</p>
                <span className={styles.messageTime}>{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className={`${styles.message} ${styles.bot}`}>
              <div className={styles.messageAvatar}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 2 && (
          <div className={styles.quickActions}>
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={styles.quickActionBtn}
                onClick={() => handleQuickAction(action)}
              >
                {action}
              </button>
            ))}
          </div>
        )}

        {/* Input Form */}
        <form className={styles.inputForm} onSubmit={sendMessage}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={CHATBOT_CONFIG.inputPlaceholder}
            disabled={isLoading}
            className={styles.input}
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim() || isLoading}
            className={styles.sendButton}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

        {/* Powered by footer */}
        <div className={styles.poweredBy}>
          Powered by VOLTIX AI
        </div>
      </div>
    </div>
  )
}

export default Chatbot
