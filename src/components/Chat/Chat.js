import React, { useState, useEffect, useRef } from "react";
import "./Chat.scss";
import MessageIcon from "@material-ui/icons/Message";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SearchIcon from "@material-ui/icons/Search";
import ChatList from "./ChatList";
import Conversation from "./Conversation";
import { useDispatch, useSelector } from "react-redux";
import { getConversation, newConversation } from "../redux/actions/conversationActions";
import {  listUserSearch } from "../redux/actions/userActions";
import { getMessage } from "../redux/actions/messageActions";
import { io } from "socket.io-client";
import ChatSearch from "./ChatSearch";

export default function Chat({ userId }) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state) => state.getConversation
  );
  const [popup, setPopup] = useState(false);
  const [friendAvar, setFriendAvar] = useState();
  const [receiverId, setReceiverId] = useState();
  const [conversation, setConversation] = useState(false);
  const [onlineFriends, setOnlineFriends] = useState();
  const [ searchList, setSearchList] = useState();
  const [ search, setSearch ] = useState('')
  const socket = useRef();
  const { list } = useSelector((state) => state.userListSearch);
  
  useEffect(() => {
    socket.current = io("ws://localhost:5000");
    dispatch(getConversation(userId));
  }, []);



  useEffect(() => {
    socket.current.emit("addUser", userId);
    socket.current.on("getUsers", (users) => {
      setOnlineFriends(users);
    });
  }, [userId]);

  const handleConversation = async (conversationId, avar, receiverId) => {
    setReceiverId(receiverId);
    setFriendAvar(avar);
    await dispatch(getMessage(conversationId));
    setConversation(conversationId);
  };

  const handleSearch = async (value) => {
    setSearch(value)
    await dispatch(listUserSearch(value));
  };
  
  useEffect( async()=>{
    if(list && list.length>0){
      if(data ){
        let newDataList =[];
        await data.map(x=>x.members.map(i=>newDataList.push(i)))
        let newList = await  list.filter(x=>!newDataList.includes(x._id))
        setSearchList(newList)
      }
    }else{
      setSearchList(false)
    }
  },[list])
  const handelNewConversation = async(receiverId)=>{
    await dispatch(newConversation(userId, receiverId))
    await dispatch(getConversation(userId));
    
    setSearch(null)
    await dispatch(listUserSearch())
  }
  return (
    <div className="chat">
      {popup ? (
        <div className="chat-popup">
          <div className="chat-popup__header">
            <p>Chat</p>
            <div>
              {conversation || conversation === 0 ? (
                <KeyboardBackspaceIcon
                  style={{ cursor: "pointer", marginRight: 20 }}
                  onClick={() => setConversation(false)}
                />
              ) : null}
              <KeyboardArrowDownIcon
                style={{ cursor: "pointer" }}
                onClick={() => setPopup(!popup)}
              />
            </div>
          </div>
          <div
            style={{
              height: 1,
              width: "100%",
              background: "black",
              opacity: 0.3,
              marginTop: 10,
              marginBottom: 10,
            }}
          />
          <div className="chat-popup__content">
            <div className="chat-popup__content-header">
              <SearchIcon id="search-icon" />
              <input
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Seach name for new chat"
              />
              {
                (searchList && searchList.length>0) && <ChatSearch handelNewConversation={handelNewConversation} searchList={searchList} />
                
              }
              {/* <p>Tất cả</p>
                <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} /> */}
            </div>
            <div className="chat-popup__content-body">
              {conversation ? null : data && data.length > 0 ? (
                data.map((item) => (
                  <ChatList
                    onlineFriends={onlineFriends}
                    userId={userId}
                    dataCon={item}
                    handleConversation={handleConversation}
                  />
                ))
              ) : (
                <div className="background">
                  <img
                    src="http://localhost:5000/upload/constants/background-mess.png"
                    alt=""
                  />
                  <p className="background">
                    Không tìm thấy cuộc hội thoại nào.
                  </p>
                </div>
              )}

              {conversation && (
                <Conversation
                  receiverId={receiverId}
                  socket={socket}
                  conversationId={conversation}
                  friendAvar={friendAvar && friendAvar}
                  userId={userId}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div onClick={() => setPopup(!popup)} className="chat-icon">
          {/* <div className='chat-icon__badge'>
              <p>3</p>
            </div> */}
          <MessageIcon style={{ color: "#ff6e40", marginRight: 5 }} />
          <p>Chat</p>
        </div>
      )}
    </div>
  );
}
