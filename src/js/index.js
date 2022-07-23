const mushroom=document.querySelector("#char1")
const nameInput=document.querySelector("#nameinput")
const startButton=document.querySelector("#startbutton")
const mainWindow=document.querySelector("#main-window")
const char=document.querySelector(".char")
const chattingWindow=document.querySelector("#chatting-window")
const firstchar=document.querySelector("#first-char")
let img=["주황버섯.gif","파란버섯.gif"]
const array=['../img/스포아.png','../img/빨간달팽이.png','../img/슬라임.png','../img/리본돼지.png','../img/주황버섯.png','../img/초록버섯.png','../img/파란버섯.png','../img/뿔버섯.png']

const body=document.querySelector("body");
function charClick(e){ //클릭한 아이디값 가져오는 함수
    //let myChar=e
    let charId=e.getAttribute('id')
    let number=charId.substring(4,charId.length)
    let charName=array[number-1].substring(7,array[number-1].length-4)
    console.log(number)
    console.log(e)
    nameInput.value=charName
    startButton.addEventListener("click",()=>{
        mainWindow.classList.add("none")
        chattingWindow.classList.remove("none")
        let today=new Date()
        let hours=today.getHours()
        let minutes=today.getMinutes()
        let milliseconds=today.getMilliseconds()
        let time=hours+minutes+milliseconds

        const param={
                    name:nameInput.value,
                    img:'url('+array[number-1]+')'
        }
        
        socket.emit("chatting",param)
    })

    socket.on("chatting",(data)=>{
        firstchar.style.backgroundImage=data.img
    })
}
//이미지반복 안되게
//순서대로 입장

startButton.addEventListener("click",()=>{
    if(nameInput.value===""){ //이름 정하지 않고 시작했을시 오류창
        alert("plz enter name")
    }
}) 

// const images=["../img/스포아.png"];

// const chosenImage=images[Math.floor(Math.random()*images.length)];

// console.log(chosenImage);

// body.style.backgroundImage='url('+chosenImage+')';