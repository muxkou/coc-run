<template>
  <mx-dialog
    ref="dialog"
    title="状态更新"
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
      <el-form-item label="HP" prop="form.status.hp.now" >
          <el-input class="mx-input" v-model="form.status.hp.now" placeholder="" />
        </el-form-item>
        <el-form-item label="SAN" prop="form.status.san.now" >
          <el-input class="mx-input" v-model="form.status.san.now" placeholder="" />
        </el-form-item>
        <el-form-item label="MOV" prop="form.status.san.mov" >
          <el-input class="mx-input" v-model="form.attributes.mov" placeholder="" />
        </el-form-item>
        <el-form-item label="状态" prop="form.status.san.brain" >
          <el-input class="mx-input" v-model="form.status.san.brain" placeholder="" />
        </el-form-item>
      </el-form>
    </template>
  </mx-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import mxDialog from '@c/mx-common/mx-dialog.vue';
import { PlayerData, useGameStore } from '../../pinia/game.pinia';

const emits = defineEmits(['success']);

const dialog = ref();
const formRef = ref();
const visible = ref(false);

const form = ref<any>({
  info: {},
  attributes: {},
  status: {
    hp: {},
    san: {}
  }
});
const rules = {
};

let playerIndex = 0;
const open = (player: PlayerData, index: number): void => {
  playerIndex = index;
  // reset validation when on in second time
  if (formRef.value) {
    formRef.value.resetFields();
  }
  
  form.value = { ...player };
  visible.value = true;
};

const close = (): void => {
  visible.value = false;
};

const game = useGameStore();
const submitHandler = async (): Promise<void> => {
  game.players[playerIndex] = { ...form.value };
  // emits();
  close();
};

defineExpose({ open, close });
</script>