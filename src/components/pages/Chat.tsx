// "use client"
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import axios from "axios";
// import { Bot, Heart, Send, User } from "lucide-react";
// import { useState } from "react";

// interface Message {
//   // id: string;
//   content: string;
//   sender: 'user' | 'bot';
//   timestamp: Date;
// }

// const Chat = () => {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       // id: '1',
//       content: 'Hello! I\'m your AI medical assistant. How can I help you today?',
//       sender: 'bot',
//       timestamp: new Date()
//     }
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage: Message = {
//       content: input,
//       sender: 'user',
//       timestamp: new Date()
//     };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:8080/medi-conversation", {
//         query: input
//       });

//       console.log("response",response?.data);
//       // Assuming backend returns: { answer: "some response text" }
//       if (response?.data?.msg === "success") {
//         const botMessage: Message = {
//           content: response?.data?.data?.bot || "Sorry, I didn't understand that.",
//           sender: 'bot',
//           timestamp: new Date()
//         };
//         setMessages(prev => [...prev, botMessage]);
//       }

//     } catch (error) {
//       console.error("chat error", error);
//       const errorMessage: Message = {
//         content: "Oops! Something went wrong. Please try again.",
//         sender: 'bot',
//         timestamp: new Date()
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     }finally{
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-4">
//       <div className="max-w-4xl mx-auto">
//         <Card className="h-[600px] flex flex-col">
//           <CardHeader className="flex flex-row items-center space-y-0 pb-4">
//             <div className="p-2 gradient-medical rounded-lg mr-3">
//               <Heart className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <CardTitle className="text-xl">Medical AI Assistant</CardTitle>
//               <p className="text-sm text-gray-600">Get instant health information and guidance</p>
//             </div>
//           </CardHeader>
//           <CardContent className="flex-1 flex flex-col p-0">
//             <ScrollArea className="flex-1 p-4">
//               <div className="space-y-4">
//                 {messages.map((message,index) => (
//                   <div
//                     key={index}
//                     className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                   >
//                     <div
//                       className={`flex items-start space-x-2 max-w-[80%] ${
//                         message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
//                       }`}
//                     >
//                       <div
//                         className={`p-2 rounded-full ${
//                           message.sender === 'user'
//                             ? 'bg-blue-500'
//                             : 'gradient-medical'
//                         }`}
//                       >
//                         {message.sender === 'user' ? (
//                           <User className="h-4 w-4 text-white" />
//                         ) : (
//                           <Bot className="h-4 w-4 text-white" />
//                         )}
//                       </div>
//                       <div
//                         className={`p-3 rounded-lg ${
//                           message.sender === 'user'
//                             ? 'bg-blue-500 text-white'
//                             : 'bg-gray-100 text-gray-900'
//                         }`}
//                       >
//                         <p className="text-sm">{message.content}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                  {loading && (
//       <div className="flex justify-start">
//         <div className="flex items-start space-x-2 max-w-[80%]">
//           <div className="p-2 rounded-full gradient-medical">
//             <Bot className="h-4 w-4 text-white" />
//           </div>
//           <div className="p-3 rounded-lg bg-gray-100 text-gray-900">
//             <div className="flex items-center space-x-1">
//               <div className="dot dot1"></div>
//               <div className="dot dot2"></div>
//               <div className="dot dot3"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//               </div>
//             </ScrollArea>
//             <div className="p-4 border-t">
//               <div className="flex space-x-2">
//                 <Input
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask me about your health concerns..."
//                   onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                   className="flex-1"
//                 />
//                 <Button onClick={handleSend} className="gradient-medical">
//                   <Send className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Chat;

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { Bot, Heart, Send, User } from "lucide-react";
import { useState } from "react";

interface Message {
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Helper to parse **bold** markdown in text line
function parseBoldMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// Component to format bot message with numbered steps & bold text
const FormattedBotMessage: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const numberedLines = lines.filter((line) => /^\d+\.\s/.test(line));

  if (numberedLines.length > 0) {
    const otherLines = lines.filter((line) => !/^\d+\.\s/.test(line));

    return (
      <div>
        {otherLines.map((line, idx) => (
          <p key={`p-${idx}`}>{parseBoldMarkdown(line)}</p>
        ))}

        <ol>
          {numberedLines.map((line, idx) => {
            const stepText = line.replace(/^\d+\.\s/, "");
            return <li key={`li-${idx}`}>{parseBoldMarkdown(stepText)}</li>;
          })}
        </ol>
      </div>
    );
  }

  // No numbered steps, just parse bold in plain text
  return <p>{parseBoldMarkdown(text)}</p>;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content:
        "Hello! I'm your AI medical assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/medi-conversation`, // অথবা https:// (যদি SSL থাকে)
        // "http://3.87.9.147:8080/medi-conversation", // অথবা https:// (যদি SSL থাকে)
        { query: input },
        { headers: { "Content-Type": "application/json" } } // হেডার যোগ করুন
      );

      if (response?.data?.msg === "success") {
        const botMessage: Message = {
          content:
            response?.data?.data?.bot || "Sorry, I didn't understand that.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("chat error", error);
      const errorMessage: Message = {
        content: "Oops! Something went wrong. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[700px] flex flex-col ">
          <CardHeader className="flex flex-row items-center space-y-0 pb-4">
            <div className="p-2 gradient-medical rounded-lg mr-3">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">Medical AI Assistant</CardTitle>
              <p className="text-sm text-gray-600">
                Get instant health information and guidance
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0  overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === "user"
                          ? "flex-row-reverse space-x-reverse"
                          : ""
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full ${
                          message.sender === "user"
                            ? "bg-blue-500"
                            : "gradient-medical"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-900"
                        } whitespace-pre-wrap`}
                      >
                        {message.sender === "bot" ? (
                          <FormattedBotMessage text={message.content} />
                        ) : (
                          <p>{message.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="p-2 rounded-full gradient-medical">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="p-3 rounded-lg bg-gray-100 text-gray-900">
                        <div className="flex items-center space-x-1">
                          <div className="dot dot1"></div>
                          <div className="dot dot2"></div>
                          <div className="dot dot3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me about your health concerns..."
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} className="gradient-medical">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
