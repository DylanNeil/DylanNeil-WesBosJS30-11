const vid = document.getElementById("video1");

vid.onclick = function(){
  console.log('vid.classList');
}

function togglePlay(){
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
