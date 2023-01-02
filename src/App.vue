<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TrackPlayer from './components/TrackPlayer.vue';
import tracks from './tracks.json';
import { Howl, Howler } from 'howler';
/*
const tracks = [
    'Old Toronto',
    'Renegade Serenade',
    'Golden Auto Mile',
    'Passengers on the Tide', 
    'Lightning Land',
    'Neverending Stories',
    'Flesh of the Gods',
    'Castles Made of Sand',
    'Windstar'
]
*/

/* Old Setup Function:

import { ref } from 'vue';
export default {
  setup() {
    const name = ref('Kyle')
    const age = ref(35)

    return {
      name,
      age
    }
  },
  components: {
    TrackPlayer,
    HelloWorld
}
 
*/


// create array of Howl objects
const howls = []
tracks.forEach((track, i) => {
  howls[i] = new Howl({
    src: [track.src],
    onend: onEnd,

  });
})

// function for controlling control buttons
// on click play play associated file
// on end play next 
// if at end stop playback

howls[7].play();
console.log(howls);

// play track based on track number
const playTrack = (trackNum) => {
  alert('a track would play now')
  
}
// v-on:click === @click

/* !!! cant use this function because it assumes play from first track
const play_audio = tracks => {
  song = new Howl({
    src: [tracks[0].src],
    volume: 0.8,
    onend: function() {
     tracks.shift();
      if (tracks.length > 0) {
        play_audio(file_named);
      }
    }
  });
  song.play();
}
*/

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Fantasy Football" />
    </div>
  </header>

  <main>
    <div class="player-container" >
      <div v-for="(track, index) in tracks" key="track">

        <TrackPlayer
          @togglePlay="playTrack" 
          :trackNumber="track.id" 
          :trackName="track.title"
          :trackSrc="track.src"
        />
  
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}

main .player-container {
  width: 400px;
  height: 400px;
  margin: auto;
  padding: 3px;
  background-color: #BEBEBE;
  box-shadow: 10px 10px #000;
  box-sizing: border-box;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
  }

  header .wrapper {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
}
</style>

