<template>
  <div class="coc-go-play-view">
    <!-- image -->
    <div class="image-area">
      <div class="image-cover">
        <img 
          v-if="sceneName"
          style="max-width: 100%;"
          :src="`/src/assets/scene/${sceneName}`" 
        >
        <div v-else class="kp-talking-cover">
          <mx-avatar 
            name="kp.jpg"
            :size="42"
          />
          <talking-ani />
        </div>
      </div>
      <div class="input">
        <el-input 
          class="mx-input" 
          v-model="inputName" 
          placeholder="" 
          @keyup.enter="onEnter"
        />
      </div>
    </div>
    <!-- players -->
    <div class="player-area">
      <player-view 
        v-for="(player, index) in game.players"
        :key="index"
        :player="player"
        :index="index"
        @roll="onRollClickHandler"
      />
    </div>
  </div>
  <roll-dialog ref="rollRef" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useGameStore } from '../../pinia/game.pinia';
import playerView from './player.view.vue';
import rollDialog from './roll.dialog.vue';
import talkingAni from '../../components/animations/talking-ani.comp.vue';
import MxAvatar from '../../components/mx-avatar/mx-avatar.comp.vue';

const game = useGameStore();
const rollRef = ref();

const onRollClickHandler = (name: string) => {
  rollRef.value.open(name);
};

const sceneName = ref('');
const inputName = ref('');
const onEnter = () => {
  sceneName.value = inputName.value;
};
</script>
<style lang="scss" scoped>
@import './playground.view.scss';
</style>