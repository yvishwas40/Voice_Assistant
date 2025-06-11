// export default VoiceAssistant;
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Mic, MicOff, Send, X, Volume2 } from 'lucide-react';
import Vapi from '@vapi-ai/web';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState(''); // ✅ Added
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm your Phoqtek Labs assistant. How can I help you today? You can speak to me or type your questions.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const vapiRef = useRef<any>(null);
  const API_KEY = 'a8bef5d6-ed6e-4255-b149-9841983dbfb3'; // Replace with your actual key
  const ASSISTANT_ID = '0f734b99-591e-4914-be76-8d49f3affc7c'; // Replace with your assistant ID
  // const API_KEY = import.meta.env.VITE_VAPI_API_KEY;
  // const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

  useEffect(() => {
    const vapi = new Vapi(API_KEY);
    vapiRef.current = vapi;

    vapi.on('call-start', () => {
      setIsConnected(true);
      setIsListening(true);
    });

    vapi.on('call-end', () => {
      setIsListening(false);
      if (transcript.trim()) {
        addMessage(transcript, 'user'); // ✅ Add final transcript as message
        setTranscript('');
      }
    });

     vapi.on('message', (msg: any) => {
      const role = msg?.message?.role;
      const content = msg?.message?.content;
      const transcription = msg?.transcription?.text;
    
      // ✅ Assistant message
      if (role === 'assistant' && content) {
        addMessage(content, 'assistant');
      }
    
      // ✅ User voice transcription
      if (role === 'user' && transcription) {
        addMessage(transcription, 'user');
      }
    });
    

    vapi.on('transcript', (text: string) => {
      setTranscript(text); // ✅ Live transcript
    });

    vapi.on('error', (e: any) => {
      console.error('Vapi Error:', e);
    });

    return () => {
      vapi.stop();
    };
  }, [transcript]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  const addMessage = (content: string, type: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleStartListening = () => {
    if (!vapiRef.current) return;

    if (!isListening) {
      vapiRef.current.start(ASSISTANT_ID);
    } else {
      vapiRef.current.stop();
    }

    setIsListening(!isListening);
  };

  const handleSendText = () => {
    if (!inputText.trim()) return;

    addMessage(inputText, 'user');
    setInputText('');

    if (vapiRef.current) {
      vapiRef.current.say(inputText, false);
    }

    setTimeout(() => {
      let response = "Thank you for your question. I'm here to help you learn more about Phoqtek Labs and our innovative photonics solutions.";

      if (inputText.toLowerCase().includes('contact')) {
        response = "You can contact us through our Contact page or reach us at info@phoqteklabs.com. We're located in Hyderabad, Telangana, India.";
      } else if (inputText.toLowerCase().includes('product')) {
        response = "Our main products include Laser Technology systems, Quantum Key Distribution (QKD) solutions, Fiber Optic Gyroscopes (FOG), and Crystal Processing equipment.";
      } else if (inputText.toLowerCase().includes('industry') || inputText.toLowerCase().includes('sector')) {
        response = "We serve four key industries: Defense & Security, Medical & Healthcare, Aerospace & Aviation, and Infrastructure Monitoring.";
      }

      addMessage(response, 'assistant');

      if (!isMuted && vapiRef.current) {
        vapiRef.current.say(response, false);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendText();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-dark-900 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gold ${
          isOpen ? 'hidden' : 'block'
        }`}
        aria-label="Open voice assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-dark-800 rounded-lg shadow-2xl border border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-600' : 'bg-red-600'}`}></div>
              <span className="font-semibold">Phoqtek Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-dark-900/20 p-1 rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-gold-500 text-dark-900'
                      : 'bg-dark-700 text-white border border-gray-600'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <button
                onClick={handleStartListening}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-gold-500'
                }`}
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-lg transition-colors ${
                  isMuted ? 'bg-red-500 text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                <Volume2 className="h-5 w-5" />
              </button>
              <span className="text-xs text-gray-400">
                {isListening ? 'Listening...' : isConnected ? 'Ready' : 'Connecting...'}
              </span>
            </div>

            {/* Live Transcript */}
            {transcript && (
              <div className="text-xs text-gray-400 italic mb-1 truncate">
                Live: {transcript}
              </div>
            )}

            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-dark-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-gold-500 focus:outline-none text-sm"
              />
              <button
                onClick={handleSendText}
                disabled={!inputText.trim()}
                className="bg-gold-500 hover:bg-gold-400 text-dark-900 p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;
