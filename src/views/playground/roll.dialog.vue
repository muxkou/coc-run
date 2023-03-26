<template>
  <mx-dialog
    ref="dialog"
    :title="title"
    :visible="visible"
    :loading="false"
    :width="'320px'"
    @before-close="close"
    @primary-click="submitHandler"
  >
    <template #content>
      <el-form 
        ref="formRef"
        class="mx-form" 
        :model="form" 
        :rules="rules"
        label-width="unset" 
      >
        <mx-button 
          type="secondary"
          custom-class="cancel"
          label="1D100"
          @click="() => roll(100)"
        />
        <mx-button 
          style="margin-left: 0;margin-top: 1.2rem"
          type="secondary"
          custom-class="cancel"
          label="1D6"
          @click="() => roll(6)"
        />
        <mx-button 
          style="margin-left: 0;margin-top: 1.2rem"
          type="secondary"
          custom-class="cancel"
          label="1D3"
          @click="() => roll(3)"
        />
        <div class="custom-roll">
          <el-input class="mx-input" v-model="customDic" placeholder="" />
          <img 
            class="dic-icon" 
            :src="DicIcon" 
            @click="roll(customDic)"
          />
        </div>
        <div class="result">
          RESULT: {{ result }}
        </div>
      </el-form>
    </template>
  </mx-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import mxDialog from '@c/mx-common/mx-dialog.vue';
import mxButton from '../../components/mx-common/mx-button.vue';
import DicIcon from '../../assets/icon/dic.png';

// import { PlayerData, useGameStore } from '../../pinia/game.pinia';

// const emits = defineEmits(['success']);

const dialog = ref();
const formRef = ref();
const visible = ref(false);
const result = ref<string | number>(0);
const customDic = ref(10);
const title = ref('ROLL');

const form = ref<any>({});
const rules = {
};

const open = (name: string): void => {
  title.value = `${name}: Roll !`;
  visible.value = true;
  result.value = 0;
};

const roll = (dic: number): void => {
  result.value = '...';
  setTimeout(() => {
    result.value = Math.floor(Math.random() * dic) + 1;
  }, 500);
};

const close = (): void => {
  visible.value = false;
};

// const game = useGameStore();
const submitHandler = async (): Promise<void> => {
  close();
};

defineExpose({ open, close });
</script>
<style lang="scss" scoped>
.result {
  margin-top: 2.4rem;
  font-weight: bold;
  font-size: 3rem;
}
.custom-roll {
  display: flex;
  margin-top: 1.2rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-left: 1.4rem;
    cursor: pointer;
  }
}
</style>