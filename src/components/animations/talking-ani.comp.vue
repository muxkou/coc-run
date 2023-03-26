<template>
  <div id="talking-ani" class="talking-ani" />
</template>
<script setup lang="ts">
import Lottie, { AnimationItem } from 'lottie-web';
import aniJson from '../../assets/animation/music.json';
import { onMounted } from 'vue';

let animation: AnimationItem

onMounted(() => {
  animation = Lottie.loadAnimation({
    container: document.getElementById('talking-ani')!,
    loop: true,
    animationData: aniJson
  });

  animation.play();
});

</script>
<style lang="scss" scoped>
.talking-ani {
  height: 12rem;
  margin-top: 12rem;
}
</style>