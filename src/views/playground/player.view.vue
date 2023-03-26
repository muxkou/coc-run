<template>
  <div class="coc-go-player-view">
    <img 
      class="dic-icon" 
      :src="DicIcon" 
      @click="emits('roll', player.info.name)"
    />
    <div 
      class="top"
      @click="onDataUpdateClickHandler"
    >
      <mx-avatar 
        :name="player.info.avatar"
        :size="7.2"
      />
      <div class="top-right">
        <div class="player-name">
          <span>{{ player.info.name }}</span>
          -
          <span>{{ player.status.san.brain }}</span>
        </div>
        <div class="status-cover">
          <!-- heart -->
          <div class="status-display">
            <img class="status-icon" :src="`/src/assets/icon/heart.png`" style="width: 3.2rem; height: 3.2rem" />
            <div class="status-label heart">
              {{ `${player.status.hp.now} / ${player.status.hp.total}` }}
            </div>
          </div>
          <!-- brain -->
          <div class="status-display">
            <img class="status-icon" :src="`/src/assets/icon/brain.png`" />
            <div class="status-label brain">
              {{ `${player.status.san.now} / ${player.status.san.total}` }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="player-attribtues">
      <div class="attributes-line first">
        <div class="attribute-item">
          {{ `STR: ${player.attributes.str}` }}
        </div>
        <div class="attribute-item">
          {{ `CON: ${player.attributes.con}` }}
        </div>
        <div class="attribute-item">
          {{ `SIZ: ${player.attributes.siz}` }}
        </div>
        <div class="attribute-item">
          {{ `DEX: ${player.attributes.dex}` }}
        </div>
        <div class="attribute-item">
          {{ `APP: ${player.attributes.app}` }}
        </div>
      </div>
      <div class="attributes-line second">
        <div class="attribute-item">
          {{ `INT: ${player.attributes.int}` }}
        </div>
        <div class="attribute-item">
          {{ `POW: ${player.attributes.pow}` }}
        </div>
        <div class="attribute-item">
          {{ `EDU: ${player.attributes.edu}` }}
        </div>
        <div class="attribute-item">
          {{ `LUC: ${player.attributes.luc}` }}
        </div>
        <div class="attribute-item">
          {{ `MOV: ${player.attributes.mov}` }}
        </div>
      </div>
    </div>
  </div>
  <data-update-dialog ref="dataUpdateRef" />
</template>
<script setup lang="ts">
import MxAvatar from '../../components/mx-avatar/mx-avatar.comp.vue';
import { PlayerData } from '../../pinia/game.pinia';
import DataUpdateDialog from './data-update.dialog.vue';
import DicIcon from '../../assets/icon/dic.png';
import { ref } from 'vue';

interface IPlayerProps {
  player: PlayerData
  index: number
}

const props = defineProps<IPlayerProps>();
const emits = defineEmits(['roll']);

// const game = useGameStore();
const dataUpdateRef = ref();
const onDataUpdateClickHandler = () => {
  dataUpdateRef.value.open(props.player, props.index);
};
</script>
<style lang="scss" scoped>
.coc-go-player-view {
  color: white;
  height: calc(20% - 1.2rem);
  background-color: black;
  border-radius: 1.2rem;
  padding: 1.2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  .dic-icon {
    position: absolute;
    cursor: pointer;
    top: 1.2rem;
    right: 1.2rem;
    width: 4.4rem;
    height: 4.4rem;
  }

  &+.coc-go-player-view {
    margin-top: 1.2rem;
  }

  .top {
    cursor: pointer;
    display: flex;

    .top-right {
      flex: 1;

      .player-name {
        color: white;
        margin-left: 1.2rem;
        // font-weight: 2rem;
        font-weight: 400;
        font-size: 2rem;
        letter-spacing: .2rem;
        margin-bottom: .8rem;
      }
    }

    .status-cover {
      display: flex;
    }

    .status-display {
      margin-left: 1.2rem;
      display: flex;
      align-items: center;

      &+.status-display {
        margin-left: 2.4rem;
      }

      .status-icon {
        width: 2.4rem;
        height: 2.4rem;
      }

      .status-label {
        margin-left: .8rem;
        font-weight: bolder;
        font-size: 2rem;

        &.heart {
          color: #d81e06;
        }

        &.brain {
          color: #4D77FF;
        }
        
      }
    }
  }
  .player-attribtues {
    flex: 1;

    .attributes-line {
      display: flex;
      width: 100%;
      height: 50%;

      .attribute-item {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
      }
    }
  }
}
</style>