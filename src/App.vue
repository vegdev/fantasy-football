<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TrackPlayer from './components/TrackPlayer.vue';
import tracks from './tracks.json';
import { Howl, Howler } from 'howler';

/*
SHAPE OF TRACKS: 
ID
ARTIST
TITLE
SRC
*/

const albumTrackTotal = 8;
// add howl obj to track 
tracks.forEach((track, i) => {
  track.howl = new Howl({
    src: [track.src[0], track.src[1]],
    onend: function() {
      console.log('onend function firing...');
      if (track.id >= albumTrackTotal) {
        console.log('Final track. Stopping Howler...');
        Howler.stop();
      }
      if (track.id < albumTrackTotal) {
        console.log('playing next song...');
        const nextTrack = track.id +1;
        const nextTrackLoaded = tracks.filter(obj => {
          return obj.id === nextTrack;
        });
        nextTrackLoaded[0].howl.play();
      }
    }
  });
})
console.log('tracks obj', tracks);

// play track based on track number
const playTrack = (trackNum) => {
  Howler.stop();
  console.log('trying to playing track:', trackNum);
  const result = tracks.filter(obj => {
    return obj.id === trackNum;
  });
    console.log('result', result)
    result[0].howl.play()
}

const stopTrack = () => {
  Howler.stop();
  console.log('stop pressed');
}

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
    </div>
  </header>

  <main>
    <div class="player-container" >
      <div class="border-container">
      <div class="album-name"><code>Lightning Land</code></div><br>
        <div v-for="(track, index) in tracks" key="track">

          <TrackPlayer
            @togglePlay="playTrack(track.id)"
            @pressStop="stopTrack()"
            :trackNumber="track.id" 
            :trackName="track.title"
            :isPlaying="track.howl.playing()"
          />
    
        </div>
      </div> 
    </div>
  </main>
</template>

<style scoped>
header {
  display: flex;
  line-height: 1.5;
  width: 100%;
}

header .wrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
main .player-container {
  width: 400px;
  height: 100%;
  margin: auto;
  padding: 8px;
  background-color: #BABABA;
  box-shadow: 10px 10px #000;
  box-sizing: border-box;
}

.album-name code{
  font-weight: 900;
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

