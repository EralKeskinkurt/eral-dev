<template>
  <nav class="blog-navbar" @submit.prevent>
    <ul class="blog-navbar-nav">
      <li class="blog-nav-item" v-for="nav in mdPageNav" :key="nav?.id" >
        <div v-if="nav?.children" >
          <span @click="nav.isDown = !nav.isDown">{{nav?.text}} <DownIcon  /></span>
          <BlogChildrenNav v-if="nav.isDown" :navChildren="nav.children" />
        </div>
        <a v-else :href="`#${nav.id}`" >{{nav.text}}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {Icon} from "#components";
const DownIcon = h(Icon, { name: 'material-symbols:arrow-drop-down' })
import BlogChildrenNav from "~/components/blog/BlogChildrenNav.vue";
const {path} = useRoute()
const { data: page } = await useAsyncData('page', () => queryContent(path).findOne())
const mdPageNav = ref<string[]>([])
onMounted(()=> {
  mdPageNav.value = page?.value?.body.toc.links
})
</script>

<style lang="scss">
.blog-navbar{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: sticky;
  top: 40px;
  @media screen and (max-width: 950px) {
    display: none;
  }
  .blog-navbar-nav{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    .blog-nav-item{
      background: #0e0e0e;
      box-sizing: border-box;
      border-radius: 3px;
      display: flex;
      align-items: center;
      width: 12rem;
      transition: all 0.6s;
      overflow: hidden;
      user-select: none;
      a{
        padding: 8px 8px;
        text-decoration: none;
        width: 100%;
        background: none;
        font-size: 0.7rem !important;
        border: none;
        font-family: 'Source Code Pro', monospace;
        color: white;
        box-sizing: border-box;
        cursor: pointer;
      }
      div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background: none;
        width: 100%;
        border: none;
        font-family: 'Source Code Pro', monospace;
        color: white;
        span{
          padding: 8px 8px;
          box-sizing: border-box;
          cursor: pointer;
          font-size: 0.7rem !important;
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
        }
        .heightUp{
          height: auto;
        }
      }
    }
  }
}
</style>