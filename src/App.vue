<script>
import Banner from './components/Banner.vue';
import Player from './components/Player.vue';
import tracks from './tracks.json';

export default {
  components: { Banner, Player },
  data() {
    return {

    }
  }
}
</script>

<template>
  <Banner></Banner>
  <TrackPlayer></TrakcPlayer>
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

