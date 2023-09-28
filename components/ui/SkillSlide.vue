<template>
<div class="skill-sec">
  <div class="skill-row">
    <ul class="skill-list">
      <li><JavascriptIcon class="skill-list-icon" size="18" /></li>
      <li><CssIcon class="skill-list-icon" size="18" /></li>
      <li><NodeIcon class="skill-list-icon" size="18" /></li>
      <li><NuxtIcon class="skill-list-icon" size="18" /></li>
      <li><NextIcon class="skill-list-icon" size="18" /></li>
      <li><TailwindIcon class="skill-list-icon" size="18" /></li>
      <li><MongoIcon class="skill-list-icon" size="18" /></li>
    </ul>
    <ul class="skill-list">
      <li><JavascriptIcon class="skill-list-icon" size="18" /></li>
      <li><CssIcon class="skill-list-icon" size="18" /></li>
      <li><NodeIcon class="skill-list-icon" size="18" /></li>
      <li><NuxtIcon class="skill-list-icon" size="18" /></li>
      <li><NextIcon class="skill-list-icon" size="18" /></li>
      <li><TailwindIcon class="skill-list-icon" size="18" /></li>
      <li><MongoIcon class="skill-list-icon" size="18" /></li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import { Icon } from '#components'
const JavascriptIcon = h(Icon, { name: 'mdi:language-javascript' })
const CssIcon = h(Icon, { name: 'mdi:language-css3' })
const NodeIcon = h(Icon, { name: 'mdi:nodejs' })
const NuxtIcon = h(Icon, { name: 'mdi:nuxt' })
const NextIcon = h(Icon, { name: 'tabler:brand-nextjs' })
const TailwindIcon = h(Icon, { name: 'mdi:tailwind' })
const MongoIcon = h(Icon, { name: 'bxl:mongodb' })
</script>

<style scoped lang="scss">
.skill-sec{
  width: 277px;
  height: 30px;
  display: flex;
  margin:0 auto ;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  user-select: none;
  .skill-row{
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
    .skill-list{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: infinite-scroll 15s linear infinite;
      li{
        margin-right: 10px;
        margin-left: 10px;
        .skill-list-icon{
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }
    @keyframes infinite-scroll {
      from{
        transform: translateX(0)
      }
      to{
        transform: translateX(-100%)
      }
    }
  }
}
</style>