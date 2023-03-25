<script>

export default {
  props: {
    trackNumber: Number,
    trackName: String, 
    isPlaying: Boolean, // <MyComponent isPlaying /> equivilant of passing :isPlaying="true"
  },
  data() {
    return {}
  },
  methods: {
    // increment() {
    //   this.count++
    // }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    // this.increment()
  }
  created() {
    // props are exposed on "this"
    console.log(this.trackNumber, ":", this.trackName)
  },
  emits: ['pressPlay', 'pressPause', 'pressStop']
}

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

  <main>
    <div class="player-container" >
      <div class="border-container">
        <div class="album-name"><code>Lightning Land</code>

  <div class="player">
    <code>{{ trackNumber }}. {{ trackName }}</code>
    <div class="track-controls">
      <div v-if="isPlaying == true">
        <i :id="`pause-track-${trackNumber}`" class="play" @click="handlePressPause">⏸</i>
      </div>
      <div v-else>
        <i :id="`play-track-${trackNumber}`" class="pause" @click="handlePressPlay">▶</i>
      </div>
      <div>
        <!-- could also do @click="$emit('togglePlay')" -->
        <i :id="`stop-track-${trackNumber}`" class="stop" @click="handlePressStop">⏹</i>
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

</style>
