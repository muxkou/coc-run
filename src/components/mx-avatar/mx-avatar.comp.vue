<template>
  <div 
    class="mx-avatar"
    :style="style"
  >
    <img 
      class="mx-avatar-img"
      :src="`/src/assets/avatars/${name}`" 
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

interface MxAvatarProps {
  name: string
  size: number
}

const props = defineProps<MxAvatarProps>();

const style = computed(() => {
  return {
    width: `${props.size}rem`,
    height: `${props.size}rem`
  }
});

</script>
<style lang="scss" scoped>
.mx-avatar {
  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    border: 1px solid white;
  }
}
</style>