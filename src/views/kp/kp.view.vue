<template>
  <div class="coc-go-kp-view">
    <mx-avatar 
      name="kp.jpg"
      :size="42"
      @click="go"
    />
    <talking-ani />
  </div>
</template>
<script setup lang="ts">
import MxAvatar from '../../components/mx-avatar/mx-avatar.comp.vue';
import talkingAni from '../../components/animations/talking-ani.comp.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const go = () => {
  router.push('/go');
};

</script>
<style lang="scss" scoped>
.coc-go-kp-view {
  color: white;
  height: 100vh;
  background-color: #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>