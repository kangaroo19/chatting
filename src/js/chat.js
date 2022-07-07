"use strict"
const socket=io();

const nickname=document.querySelector("#nickname")
const chatList=document.querySelector(".chatting-list")
const chatInput=document.querySelector(".chatting-input")
const sendButton=document.querySelector(".send-button")


sendButton.addEventListener("click",()=>{
    const param={
        name:nickname.value,
        msg:chatInput.value
    }
    socket.emit("chatting",param)
})



socket.on("chatting",(data)=>{
    const li=document.createElement("li")
    if(data.msg!==""){
        li.innerText=`${data.name}님의- ${data.msg}`
        chatList.appendChild(li)
    }
})



