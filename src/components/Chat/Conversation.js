import React, { useState, useEffect, useRef } from "react";
import "./Conversation.scss";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, newMessage } from "../redux/actions/messageActions";
import MyMess from "./MyMess";
import YourMess from "./YourMess";
import { getChatBot } from "../redux/actions/chatBotActions";

export default function Conversation({
  receiverId,
  socket,
  conversationId,
  friendAvar,
  userId,
  bot,
}) {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [messages, setMessages] = useState([]);
  const { loading, error, data } = useSelector((state) => state.getMessage);
  const { chatBot } = useSelector((state) => state.chatBot);
  const handleSend = async () => {
    if (bot) {
      await dispatch(getChatBot(text));
      setMessages((prev) => [
        ...prev,
        {sender: userId, text, createAt: Date.now() },
      ]);
      setText("");

      return;
    }
    await dispatch(newMessage(conversationId, userId, text));
    await socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId: receiverId,
      text: text,
    });
    setMessages((prev) => [
      ...prev,
      { conversationId, sender: userId, text, createAt: Date.now() },
    ]);
    setText("");
  };
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if(socket){
      socket?.current.on("getMessage", (mes) => {
        setMessages((prev) => [
          ...prev,
          { sender: mes.senderId, text: mes.text, createAt: Date.now() },
        ]);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (bot) {
      return;
    }
    if (data) {
      setMessages(data);
    }
  }, []);

  useEffect(() => {
    if(bot){
      if(!chatBot?.fulfillmentText){
        return
      }
      setMessages((prev) => [
        ...prev,
        {sender: 'bot', text:chatBot?.fulfillmentText, createAt: Date.now() },
      ]);
    }
  }, [chatBot]);
  console.log(friendAvar)
  return (
    <>
      <div className="conversation">
        {messages &&
          messages.map((m, index) =>
            m.sender === userId ? (
              <YourMess key={index} message={m} />
            ) : (
              <MyMess key={index} avar={friendAvar?friendAvar:'upload/constants/bot.png'} message={m} />
            )
          )}
        <div ref={messagesEndRef} />
      </div>

      <div className="conversation__send">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <SendIcon
          className="conversation__send-icon"
          onClick={() => handleSend()}
        />
      </div>
    </>
  );
}
