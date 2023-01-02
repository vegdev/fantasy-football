<script setup>

const props = defineProps({
  trackName: {
    type: String,
    required: true,
  },
  trackNumber: {
    type: Number,
    required: true,
  }
});

const emit = defineEmits(['togglePlay'])

const handleTogglePlay = () => {
  emit('togglePlay', props.trackNumbe)
}
</script>

<template>
  <div class="player">
    <code>{{ trackNumber }}. {{ trackName }}</code>
    <div class="track-controls">
      <i :id="`play-track-${trackNumber}`" class="play" @click="handleTogglePlay">{{ false ? '⏸' : '▶' }}</i>
      <!-- could also do @click="$emit('togglePlay')" -->
      <i :id="`stop-track-${trackNumber}`" class="stop" @click="pressStop">⏹</i>
    </div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  justify-content: space-between;
  padding: 2px;
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
