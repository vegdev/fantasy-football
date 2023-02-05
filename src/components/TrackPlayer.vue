<script setup>

const props = defineProps({
  trackName: {
    type: String,
    required: true,
  },
  trackNumber: {
    type: Number,
    required: true,
  },
  isPlaying: {
    type: Boolean,
    required: true,
    default: false
  }
});

const emit = defineEmits(['togglePlay', 'pressStop'])

const handlePressPlay = () => {
  emit('togglePlay', props.trackNumber)
  console.log('props.trackNumber =', props.trackNumber);
}

const handlePressStop = () => {
  emit('pressStop');
  console.log('stop has been pressed');
}
</script>

<template>
  <div class="player">
    <code>{{ trackNumber }}. {{ trackName }}</code>
    <div class="track-controls">
      <div v-if="isPlaying == true">
        <Pause :id="`pause-track-${trackNumber}`" class="play pointer" src="pausesvg" v-show="isPlaying" @click="handlePressPause"/>
      </div>
      <div v-else>
        <Play :id="`play-track-${trackNumber}`" class="pause pointer" src="playsvg" v-show="!isPlaying" @click="handlePressPlay"/>
      </div>
      <div>
        <!-- could also do @click="$emit('togglePlay')" -->
        <Stop :id="`stop-track-${trackNumber}`" class="stop pointer" src="stopsvg" @click="handlePressStop" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 100%;
  height: 30px;
  /* border: 1px solid black; */
  box-sizing: border-box;
}
.player i {
  padding-left: 4px;
  padding-right: 4px;
}
.pointer {cursor: pointer;}

</style>
