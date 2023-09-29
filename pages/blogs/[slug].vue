<script setup>
import BlogNavSection from "~/components/blog/BlogNavSection.vue";
import {MdPreview} from "md-editor-v3";
import 'md-editor-v3/lib/style.css';
import Navbar from "~/components/ui/Navbar.vue";
definePageMeta({
  layout:''
})
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

<template transition="page">
  <div class="container">
    <main class="blog-slug">
      <BlogNavSection />
      <MdPreview :md-heading-id="text => text.toLowerCase().split(' ').join('-')" class="content-md" language="en-US" theme="dark" v-model="data" preview-only></MdPreview>
      <Navbar />
    </main>
  </div>
</template>

<style lang="scss">
.blog-slug{
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: start;
  justify-content: space-between;
  padding: 40px 0;
  width: 100%;
  position: relative;
  @media screen and (max-width: 950px) {
    grid-template-columns: auto !important;
    justify-content: center;
  }
  .content-md{
    width: 100%;
    font-family: 'Inclusive Sans', sans-serif;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.02);
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
    blockquote{
      padding: 3px 10px;
      box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.03);
    }
    img{
      width: auto;
      height: 20rem;
      object-fit: contain;
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
}

</style>