'use client'

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react'
import DOMPurify from 'isomorphic-dompurify'

export default function ChatBot() {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'representative', content: string }>>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const newUserMessage = { type: 'user' as const, content: inputValue }
    setMessages(prev => [...prev, newUserMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('https://jmancilla-toolkit-968061438000.us-west1.run.app/representative', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: inputValue }),
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      const sanitizedResponse = DOMPurify.sanitize(data.response)
      const newRepresentativeMessage = { type: 'representative' as const, content: sanitizedResponse }
      setMessages(prev => [...prev, newRepresentativeMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { type: 'representative', content: 'Sorry, an error occurred. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div ref={messageContainerRef} className="h-[400px] overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                <p><i>Loading...</i></p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isLoading}
          />
          <Button onClick={handleSendMessage} disabled={isLoading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}