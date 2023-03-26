<template>
  <el-button 
    :class="`mx-button ${customClass}`"
    :style="style"
    :loading="loading"
  >
    {{ label }}
  </el-button>
</template>
<script setup lang="ts">
import { computed } from 'vue';

interface IMXButtonProps {
  label: string
  width?: string
  height?: string
  customClass?: string
  type?: 'primary' | 'secondary' | 'custom',
  loading?: boolean
}
const props = withDefaults(defineProps<IMXButtonProps>(), {
  width: '100%',
  height: '4rem',
  type: 'primary',
  customClass: '',
  loading: false
});

const style = computed(() => {
  const _style = {
    width: props.width,
    height: props.height,
    backgroundColor: 'white',
    borderRadius: '.4rem',
    color: '#18181c'
  };
  if (props.type === 'primary') {
    _style.backgroundColor = '#18181c';
    _style.color = 'white';
  }
  return _style;
});

</script>