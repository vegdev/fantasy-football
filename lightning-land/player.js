import tracksObject from './public/tracks.json' assert { type: 'json' };
console.log('tracksObject:',tracksObject);

// create the audio context
const audioContext = new AudioContext();
console.log('audio Context', audioContext);

// get refrenece to the player element
const llplayer = document.getElementById('lightning-land-tracks');
console.log('llplayer',llplayer);

// get array of track elements
const tracks = llplayer.children;
console.log('tracks', tracks);

// functon initAudio() {}


function setPlayButton(idname, index) {
  let play = document.querySelector(`div#${idname}.track .track-controls .track-play`)
  play.addEventListener('click', () => {
    // play the track
    tracksObject[index].audio.play();
    console.log('play clicked for', idname);
  });
}

function setPauseButton(idname, index) {
  let play = document.querySelector(`div#${idname}.track .track-controls .track-pause`)
  play.addEventListener('click', () => {
    // pause the track
    tracksObject[index].audio.pause();
    console.log('pause clicked for', idname);
  });
}

function setStopButton(idname, index) {
  let play = document.querySelector(`div#${idname}.track .track-controls .track-stop`)
  play.addEventListener('click', () => {
    // stop the track
    tracksObject[index].audio.pause();
    tracksObject[index].audio.currentTime = 0;
    console.log('stop clicked for', idname);
  });
}

// this function is complete just need to access the play function of the audio context?
tracksObject.forEach((track, index) => {
  let audio = new Audio(track.src[0]);
  tracksObject[index].audio = audio;
  setPlayButton(track.idname, index)
  setPauseButton(track.idname, index)
  setStopButton(track.idname, index)
});

console.log('new tracksObject', tracksObject);

// use Element.closest to get the closest ancestor


// how can we do this?
// - we need to have event listeners on every play button at least
// - the evnt listeners will have a function that plays the correct file based
// on something. maybe the id name will match a name in the object? or we use
// a number id.
// - we will need a function that gets called when on end is fired that will
// play the next track if there is another track
// - play should stop any other tracks playing.
// - stop should stop the track (should any stop stop any playing track?)
// - play should also function as a pause
// - 
// NOTE: i was thinking we could use js to insert the objects into the player
// instead of having to build them out all manually. we could use
// document.createElement(tagName[, options]);
// 
