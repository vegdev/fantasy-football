import tracksFile from './public/tracks.json' assert { type: 'json' };

// create the audio context
const audioContext = new AudioContext();

// get refrenece to the player element
const llplayer = document.getElementById('lightning-land');

// get the track elements using the player element
const htmlTracks = llplayer.querySelectorAll('.track');

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
