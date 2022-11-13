var video = document.getElementById("player1");
var slider = document.getElementById("slider");
var output = document.getElementById("demo");

// initialize video
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	document.querySelector("#player1").preload = auto;
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to  " + video.autoplay);
	console.log("Loop is set to "+video.autoplay);
})

// document.getElementById("play").onclick = function (){
// 	document.getElementById(".video").play();
// }

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// document.getElementById("play").innerHTML=video.play *100 + "%";
	video.innerHTML = video;
	video.play();
});

// pause button
document1.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	onpause = video.pause();
	// video.compareDocumentPosition()
})

// slow down
document.getElementById("slower").addEventListener("click", function() {
	console.log("slow down video");
	video.playbackRate*=.90
	console.log("Speed is", video.playbackRate)
})

// speed up
document.getElementById("faster").addEventListener("click", function() {
	console.log("slow down video");
	video.playbackRate+=video.playbackRate*.10
	console.log("Speed is", video.playbackRate)
})

// skip ahead
document.getElementById("skip").addEventListener("click", function() {
	console.log("skip ahead");
	video.currentTime += 15
})

// mute and unmute
document.getElementById("mute").addEventListener("click", function() {
	console.log("muted");
	video.muted = true;
	if(mute.muted === true){
		mute.innerText="unmute"
	}
	else if(mute.muted === false){
		mute.innerText = "mute"
	}
})

// volume slider
output.innerHTML = function() {
	output.innerHTML = this.value;
}

// styled
document.getElementById("video").addEventListener("click", function() {
	video.style.property = new style;
})

// original




// // probably wrong
// document.querySelector("volume").addEventListener("change", function(e) {
// 	document.getElementById("volume").innerHTML=video.volume *100 + "%";
// })