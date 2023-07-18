"use client";
import { useRef, useEffect, useState } from "react";
import AdminMessage from "@/Components/FAQ/AdminMessage";

export default function FaqPage(props: any) {
  interface Message {
    id: number;
    message: string;
    votes: number;
  }
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);
  const getQuestions = async () => {
    let response = await fetch("http://127.0.0.1:8080/questions/all", {
      method: "GET",
    });
    if (response.ok) {
      const messages = await response.json();
      console.log(messages);
      setMessages(messages);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const sendQuestion = async () => {
    let response = await fetch("http://127.0.0.1:8080/questions/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: message,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setMessages((messages) => [...messages, data]);
    } else {
      console.log("error");
    }
  };

  const sendMessageHandler = () => {
    if (message !== "") {
      sendQuestion();
      setMessage("");
    }
  };

  const clearMessageHandler = async () => {
    let response = await fetch("http://127.0.0.1:8080/questions/clear", {
      method: "DELETE",
    });
    if (response.ok) {
      setMessages([]);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="h-[calc(100vh-80px)]">
      <div
        className="absolute inset-x-0 -z-10 overflow-hidden transform-gpu  blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] top-30  aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-r from-teal-200 to-teal-300 opacity-30 sm:left-[calc(50%+22rem)] sm:w-[50.1875rem]"
          style={{
            clipPath:
              "polygon(74% 27%, 89% 62%, 21% 49%, 75% 100%, 25% 100%, 93% 60%, 0 78%)",
          }}
        />
      </div>
      <div className="m-4">
        {messages.map((msg: Message) => (
          <AdminMessage key={msg.id} {...msg} />
        ))}
      </div>
      <div className="h-screen" />
      {/* a sticky chatbar in the bottom with a submit button on the left */}

      <div className="sticky bottom-0 ">
        <button
          onClick={sendMessageHandler}
          className="absolute z-50 bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-lg px-2 py-1.5 m-4 rounded-md "
        >
          Send
        </button>
        <button
          onClick={clearMessageHandler}
          className="absolute z-50 bottom-0 left-0 bg-red-500 hover:bg-red-600 text-lg px-2 py-1.5 m-4 rounded-md "
        >
          DELETE ALL MESSAGES
        </button>
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="align-top font-montserrat border-t-2 text-xl border-t-gray-400 border-l-0 border-r-0 border-b-0 focus:border-b-0 focus-within:border-b-0 focus-visible:border-b-0 resize-none w-full bg-gray-900 h-[120px]"
        ></textarea>
      </div>
    </div>
  );
}
