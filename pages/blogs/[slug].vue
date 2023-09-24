<script setup>
import {MdPreview} from "md-editor-v3";
import 'md-editor-v3/lib/style.css';
const data = ref(" ")
onMounted(async () => {
  const { path } = await useRoute()
  const url = path.slice(6, )
  console.log(url)
  await $fetch(`/md${url}.md`, {
    method:'GET',
  }).then(res =>{
    data.value = res.toString()
  })
})
</script>

<template>
  <main class="content">
    <MdPreview class="content-md" language="en-US" theme="dark" v-model="data" preview-only></MdPreview>
  </main>
</template>

<style lang="scss">
.content-md{
  width: 100%;
  font-family: 'Inclusive Sans', sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  p{
    font-size: 0.9rem !important;
    color: #cecece;
    a{
      text-decoration: underline !important;
      &:hover{
        color: rgba(29,208,93);
      }
    }
  }
  img{
    width: auto;
    height: 20rem;

    border: none !important;
    text-align: start;
  }
  em{
    font-style: italic !important;
  }
  strong{
    font-weight: bold;
  }
  a{
    color: white;
    text-decoration: none !important;
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
  ul ul, ol ul {
    list-style-type: circle;
    list-style-position: inside;
  }
  ol ol, ul ol {
    list-style-type: lower-latin;
    list-style-position: inside;
  }
}
</style>