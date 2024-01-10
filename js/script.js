var video = document.getElementById("myVideo");
var image=document.getElementById('mute');
function changeImmageAddress(){
  if (video.paused) {
 video.play();
  btn.innerHTML = "Pause";
  image.src='./Images/muted.svg';

} else {
 video.pause();
 btn.innerHTML = "Play";
 image.src='./Images/unmuted.svg';
}
}