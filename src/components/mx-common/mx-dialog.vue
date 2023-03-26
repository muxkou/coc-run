<template>
  <el-dialog
    :title="title"
    :model-value="visible"
    :class="`mx-dialog ${customClass}`"
    :width="width"
    :before-close="onBeforeCloseHandler"
    :close-on-click-modal="true"
    :append-to-body="true"
  >
    <slot name="content" />
    <template 
      v-if="enableFooter" 
      #footer
    >
      <mx-button 
        type="secondary"
        custom-class="cancel"
        :label="cancelText || '取消'"
        @click="onBeforeCloseHandler"
      />
      <mx-button
        v-if="enablePrimaryButton"
        :label="pirmaryText || '确认'"
        :loading="loading"
        type="primary"
        @click="onPrimaryHandler"
      />
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import MxButton from './mx-button.vue';

interface IMXDialogProps {
  title?: string,
  visible: boolean,
  customClass?: string,
  width?: string,
  enableFooter?: boolean,
  cancelText?: string,
  enablePrimaryButton?: boolean,
  loading?: boolean,
  pirmaryText?: string
}

withDefaults(defineProps<IMXDialogProps>(), {
  customClass: '',
  width: '512px',
  enableFooter: true,
  enablePrimaryButton: true,
  loading: false,
  title: ''
});

const emits = defineEmits(['before-close', 'primary-click']);

const onBeforeCloseHandler = (): void => {
  emits('before-close');
};

const onPrimaryHandler = (): void => {
  emits('primary-click');
};

</script>
<style lang="scss">
.el-dialog.mx-dialog {
  border-radius: .8rem;

  .el-dialog__body {
    padding: .8rem 2rem;
  }

  .el-dialog__footer {
    display: flex;
  }
}
</style>