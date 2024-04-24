console.log("Welcome to spotify")

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/bolona.mp3');
let masterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [{
    songName:"Bolo na", filpath:"songs/1.mp3", coverPath:"images/bolona.png"},
{
    songName:"Ve kamleya", filpath:"songs/2.mp3", coverPath:"images/vekamleya.png"
},
{
    songName:"Mai agar kahoo", filpath:"songs/3.mp3", coverPath:"images/maiagarkahu.png"},
{
    songName:"Salame-ishq", filpath:"songs/4.mp3", coverPath:"images/salameishq.png"
},
{
    songName:"Jab se tere naina", filpath:"songs/5.mp3", coverPath:"images/jabseterenaina.png"
},

]

songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const play = ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.style.opacity=1;
    }else if(audioElement.play || audioElement.currentTime>0){
        audioElement.pause();
        gif.style.opacity = 0;
        masterSongName.style.opacity=0;


    }
}

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    play();
    
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
// update progressbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
progressBar.value = progress;

})

progressBar.addEventListener('change',()=>{
  audioElement.currentTime = ((progressBar.value * audioElement.duration)/100);
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    
    songIndex = parseInt(e.target.id);
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

    play();

})
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>3){
        songIndex = 0
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;

    play();

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    play();

})