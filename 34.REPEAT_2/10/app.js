// Добавить переключение песен

const play = document.querySelector('.play');
const next = document.querySelector('.next');
const back = document.querySelector('.back');

const audio = document.querySelector('audio');
const artist = document.querySelector('.artist');
const nameOfSong = document.querySelector('.nameOfSong');
const songCover = document.querySelector('.songCover');

let flag = false;

const songs = [
    { id: 1, path: './songs/song1.mp3', artist: 'the hardkiss - кораблі', nameOfSong: 'song1', songCover: 'background-image: url(./assets/img1.png)' },
    { id: 2, path: './songs/song2.mp3', artist: 'monatik - люді...камені', nameOfSong: 'song2', songCover: 'background-image: url(./assets/img2.png)' },
    { id: 3, path: './songs/song3.mp3', artist: 'jerry hail', nameOfSong: 'song3', songCover: 'background-image: url(./assets/img3.jpg)' }
]

let currentIndexSong = 0;

play.addEventListener('click', function () {
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    songCover.style = songs[currentIndexSong].songCover;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    if (flag === false) {
        audio.play();
        this.style = 'background-image:url(./assets/pause.svg)';
        flag = true;
    } else {
        audio.pause();
        play.style = 'background-image:url(./assets/playBtn.png)';
        flag = false;
    }
});

back.addEventListener('click', () => {
    if (currentIndexSong == 0) return;
    currentIndexSong--;
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    songCover.style = songs[currentIndexSong].songCover;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    audio.play();
    flag = true;
    play.style = 'background-image:url(./assets/pause.svg)';
})

next.addEventListener('click', () => {
    if (currentIndexSong == songs.length - 1) return;
    currentIndexSong++;
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    audio.play();
    flag = true;
    play.style = 'background-image:url(./assets/pause.svg)';
});