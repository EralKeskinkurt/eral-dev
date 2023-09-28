<script setup lang="ts">
const props = defineProps({
  navChildren:{
    type:Object,
    required: false
  }
})
</script>

<template>
    <ul v-if="navChildren" class="blog-navbar-children">
      <li v-for="children in navChildren" :key="children.id" class="children-item"><a :href="`#${children.id}`">{{children.text}}</a></li>
    </ul>
</template>

<style scoped lang="scss">
.blog-navbar-children{
  display: flex;
  padding: 10px 8px;
  transition: all 0.6s;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.07);
  gap: 5px;
  align-items: flex-start;
  .children-item{
    a{
      font-size: 0.7rem !important;
      color: rgba(255, 255, 255, 0.72) !important;
      text-decoration: none;
    }
  }
}
</style>