<template>
  <div class="header">
    <div class="header-container">
      <p class="text-user-name">hi {{ name }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ContentHeader',
  setup() {
    const name = ref('')
    return {
      name
    }
  }
})
</script>

<style lang="scss" scoped>
:deep(.header) {
  @import '../style/components/header.scss';
}
</style>
