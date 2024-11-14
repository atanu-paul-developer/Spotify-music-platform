let song_one = document.querySelector(".card .one");
let song_two = document.querySelector(".card .two");
let song_three = document.querySelector(".card .three");
let pic_one = document.querySelector(".pic_one");
let pic_two = document.querySelector(".pic_two");
let pic_three = document.querySelector(".pic_three");
let final_pic = document.querySelector(".final_pic");
let writer = document.querySelector(".writer");
let song_name = document.querySelector("#song_name");
let artist = document.querySelector("#artist");
const audio = document.querySelector("audio");
//i access all the necessary objects to implement the bottom features ||

pic_one.addEventListener("click", () => { // when some click the first song then the name and pic of the song will visible in the footer section ||
    song_name.innerText = "JO TUM MERE HO";
    artist.innerText = "Anuv Jain";
    final_pic.src = "https://i.scdn.co/image/ab67616d0000b27372a77d038887cdc425f5ee55";
    let audioFile = 'songOne.mp3';
    audio.src = audioFile;
    songStart();
})

pic_two.addEventListener("click", () => {  // when some click the second song then the name and pic of the song will visible in the footer section ||
    song_name.innerText = "Kyn Faya Kyn";
    artist.innerText = "A.R.Rahman";
    final_pic.src = "https://i.scdn.co/image/ab67616d00001e0254e544672baa16145d67612b";
    let audioFile = 'songTwo.mp3';
    audio.src = audioFile;
    songStart();
})

pic_three.addEventListener("click", () => {  // when some click the third song then the name and pic of the song will visible in the footer section ||
    song_name.innerText = "Desi Kalakar";
    artist.innerText = "Honey singh";
    final_pic.src = "https://i.scdn.co/image/ab67616d00001e0265ce8c712e4fb894bc88461b";
    let audioFile = 'songThree.mp3';
    audio.src = audioFile;
    songStart();
})

// play and pause the song

let play_btn = document.querySelector("#play_btn"); 

play_btn.addEventListener("click", () => { // when i click the plabar icon then the function will be called ||
    iconChange();
})

let iconChange = () => { // the fuction is used to play and pause the function
    if(play_btn.className === "fa-solid fa-play") {
        play_btn.className = "fa-solid fa-pause";
        audio.play();
    } else if (play_btn.className === "fa-solid fa-pause") {
        play_btn.className = "fa-solid fa-play";
        audio.pause();
}
}

// autoplay the songs one by one

// when a song i running that time if i click on a song then the song will start
function songStart() {
    if(play_btn.className === "fa-solid fa-play") {
        play_btn.className = "fa-solid fa-pause";
        audio.play();
    }  else if (play_btn.className === "fa-solid fa-pause") {
        play_btn.className = "fa-solid fa-pause";
        audio.play();
}
    notRepeat();
}

// control the audio from the icon instead of controlling the audio controllers -->

const playbarContainer = document.querySelector(".playbar-container");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

// update the plaber while the song is progressing by seconds

audio.addEventListener("timeupdate", () => {
    let positionCovered = (audio.currentTime / audio.duration) * 100;
    progress.style.width = positionCovered + "%";
})

// seek the position of the playbar where it is clicked or drag
let Drag = false;
progressBar.addEventListener("mousedown", (e) => {
    timeLIne(e);
    Drag = true;
})

progressBar.addEventListener("mousemove", (e) => {
    if(Drag) {
        timeLIne(e);
    }
})

progressBar.addEventListener("mouseup", (e) => {
    Drag = false;
})

timeLIne = (x) => {
    let totalLength = progressBar.clientWidth;
    let positonOfcursor = x.offsetX;
    let coverdWidth = (positonOfcursor/totalLength) * 100;
    progress.style.width = coverdWidth + '%';

   let cover = (positonOfcursor/totalLength);
   audio.currentTime = cover * audio.duration;
}

// NAVIGATION OF SONGS

let backward_icon = document.querySelector("#backward");
let forward_icon = document.querySelector("#forward");

let arrSong = ['songOne.mp3', 'songTwo.mp3',  'songThree.mp3'];


// forward song navigation ||
function forwardSong(audioFile, nameAuthor, nameSong, singer) { // the first song is playing the index value is 0 when i click forward then the index value will be 1 so the next song start and when i click the forward next time then the next song will start
    return new Promise((resolve, reject) => {
        let index = 0;
        forward_icon.addEventListener("click", () => {
            resolve();
            song_name.innerText = nameAuthor;
            artist.innerText = nameSong;
            final_pic.src = singer;
            if(audioFile === arrSong[index]) {
                index++;
                audioFile = arrSong[index];
                audio.src = audioFile;
                audio.play();
            }   
            })
    })
}

forwardSong('songOne.mp3', "Kyn Faya Kyn", "A.R.Rahman",  "https://i.scdn.co/image/ab67616d00001e0254e544672baa16145d67612b")
.then(() => {
    forwardSong('songTwo.mp3', "Desi Kalakar",  "Honey singh", "https://i.scdn.co/image/ab67616d00001e0265ce8c712e4fb894bc88461b")
    .then(() => {
        console.log("working!");
    })
})
.catch((err) => {
    console.log(err);
})

// backward song navigation ||
function backwardSong(audioFile, nameAuthor, nameSong, singer) {
    return new Promise((resolve, reject) => { // the last song is playing the index value is 2 when i click backward then the index value will be 1 so the previous song start and when i click the backward next time then the previous song will start
        let index = 2;
        backward_icon.addEventListener("click", () => {
            resolve();
            song_name.innerText = nameAuthor;
            artist.innerText = nameSong;
            final_pic.src = singer;
            if(audioFile === arrSong[index]) {
                index--;
                audioFile = arrSong[index];
                audio.src = audioFile;
                audio.play();
            }   
            })
    })
}

backwardSong('songThree.mp3', "Kyn Faya Kyn", "A.R.Rahman",  "https://i.scdn.co/image/ab67616d00001e0254e544672baa16145d67612b")
.then(() => {
    backwardSong('songTwo.mp3', "JO TUM MERE HO", "Anuv Jain", "https://i.scdn.co/image/ab67616d0000b27372a77d038887cdc425f5ee55")
    .then(() => {
        console.log("good luck and be patient and cosistent!")
    })
})
.catch((err) => {
    console.log(err);
})

// control the volume of the audio or song 

var e = document.querySelector('.volume-slider-con');
var eInner = document.querySelector('.volume-slider');
var drag = false;

e.addEventListener('mousedown',function(ev) {
   drag = true;
   updateBar(ev.clientX);
});

e.addEventListener('mousemove',function(ev){
   if(drag){
      updateBar(ev.clientX);
   }
}); 

e.addEventListener('mouseup',function(ev){
 drag = false;
});

var updateBar = function (x, vol) {
    var volume = e;
        var percentage;
        //if only volume have specificed
        //then direct update volume
        if (vol) {
            percentage = vol * 100;
        } else {
            var position = x - volume.offsetLeft;
            percentage = 100 * position / volume.clientWidth;
        }

        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //update volume bar and video volume
        eInner.style.width = percentage +'%';
        audio.volume = percentage / 100;

        const volSign = document.querySelector('#volSign');
        if (audio.volume > 0.7 && audio.volume < 1) {
            volSign.className = "fa-solid fa-volume-high";
        } else if (audio.volume > 0.2 && audio.volume < 0.6) {
            volSign.className = "fa-solid fa-volume-low";
        } else if (audio.volume > 0 && audio.volume < 0.1) {
            volSign.className = "fa-solid fa-volume-xmark";
        }
};

// repeat play 

audio.loop = false;
const repeatPlay = document.querySelector('#repeatPlay');

repeatPlay.addEventListener("click", () => {
    if(audio.loop == false) {
        audio.loop = true;
        repeatPlay.style.color = "lightgreen";
    } else if (audio.loop == true) {
        audio.loop = false;
        repeatPlay.style.color = "white";
    }
})

notRepeat = () => {
    audio.loop = false;
    repeatPlay.style.color = "white";
}

// autoplay songs (one song end next song will start) -->

// let arrSong = ['songOne.mp3', 'songTwo.mp3',  'songThree.mp3'];
// const audio = document.querySelector("audio");

let autoIndex = 0;

audio.src = arrSong[autoIndex];

audio.addEventListener("ended", () => {
    if(autoIndex < arrSong.length) {
        autoIndex++;
        audio.src = arrSong[autoIndex];
        audio.play();
        if( arrSong[autoIndex] == 'songTwo.mp3') {
            song_name.innerText = "Kyn Faya Kyn";
            artist.innerText =  "A.R.Rahman";
            final_pic.src ="https://i.scdn.co/image/ab67616d00001e0254e544672baa16145d67612b";
        } else if ( arrSong[autoIndex] == 'songThree.mp3') {
            song_name.innerText = "Desi Kalakar";
            artist.innerText =  "Honey singh";
            final_pic.src = "https://i.scdn.co/image/ab67616d00001e0265ce8c712e4fb894bc88461b";
        }
    }
})

audio.play();