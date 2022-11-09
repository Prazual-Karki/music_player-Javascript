// variables, arrays etc;
let song_list = new Array("_Into_the_Spider-Verse).m4a","5_Seconds_Of_Summer_-_Youngblood_(Alt_Version).m4a","15  WISH LIST.mp3","Chari Bharara.m4a","Ed Sheeran - Shape of You [Official Video].m4a","Marshmello_ft._Bastille_-_Happier_(Official_Music_Video).m4a"); // Contains Audio URLs
let current_song = 0;
let songName = new Array("sunflower-Rockstar","youngblood-5SOS","wishlist-pearlJam","charibharara-anuprastha","shapeOfYou-EdSheeran","happier-marshmello")
let player = new Audio();
player.src = song_list[current_song];
let img = document.getElementById("play");
let logo = document.getElementById("logo");
var count = 0; 

// for respond after clicking
document.getElementById("prev").addEventListener("click", prevSong);
document.getElementById("play").addEventListener("click", playSong);
document.getElementById("next").addEventListener("click", nextSong);

// for play songs
function playSong(){
    document.getElementById("songName").innerHTML = songName[current_song];
    document.getElementById("songName").style.fontStyle = "italic";
    logo.classList.add("anime");
    if(count == 0){
        count = 1;
        player.play();
        img.src = "pause.png";
    }else{
        count = 0;
        pauseSong();
    }

}

// for pause songs
function pauseSong(){
    player.pause();
    img.src = "play.png";
    logo.classList.remove("anime");


}
//  for next songs to play
function nextSong(){
    player.pause();
    img.src = "pause.png";
    current_song = (current_song + 1) % song_list.length;
    player.src = song_list[current_song];
    player.play();
    document.getElementById("songName").innerHTML = songName[current_song];
    document.getElementById("songName").style.fontStyle = "italic";
    logo.classList.add("anime");
}

// for previous songs to play
function prevSong(){
    player.pause();
    img.src = "pause.png";
    current_song = (current_song - 1) % song_list.length;
    if (current_song == -1 ){
        current_song = song_list.length - 1;
    }
    player.src = song_list[current_song];
    player.play();
    document.getElementById("songName").innerHTML = songName[current_song];
    document.getElementById("songName").style.fontStyle = "italic";
    logo.classList.add("anime");
}