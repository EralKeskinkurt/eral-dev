<template>
    <div class="content">
      <div class="blog">
        <h1 class="blogs-title"><strong>Blogs</strong></h1>
        <nav class="blog-navbar">
            <ul class="blog-navbar-nav">
              <li class="blog-navbar-link" v-for="links of content_link" :key="links.children_path">
                <NuxtLink :to="links.children_path">
                  {{links?.children_title}}
                <p>{{links?.children_desc}}</p>
                </NuxtLink>
              </li>
            </ul>
        </nav>
      </div>
    </div>
</template>

<script lang="ts" setup>
const content_link = ref<object[]>([])
onMounted(async () => {
  fetchContentNavigation().then(data => data.forEach(dat => dat.children?.map(children => {
    returnDescription(children._path).then(res => {
      content_link.value.push({children_path:children._path, children_title: children.title, children_desc: res})
    })
  })))
})
const returnDescription = async (pageLink:string) => {
  const { data: page } = await useAsyncData('my-page', queryContent(pageLink).findOne)
  return page?.value?.description
}
</script>

<style lang="scss">
  .blog{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
      @media screen and (max-width: 950px) {
        align-items: center;
      }
    .blogs-title{
      color:white;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.6rem;
      @media screen and (max-width: 950px) {
        text-align: center;
        margin-top: 50px;
      }
      strong{
        color: rgba(29,208,93);
      }
    }
    .blog-navbar{
      margin-top: 30px;
      width: 100%;
      .blog-navbar-nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        @media screen and (max-width: 950px) {
          align-items: center;
        }
        .blog-navbar-link{
          box-sizing: border-box;
          background: black;
          width: auto;
          border: 1px solid #ffffff80;
          border-radius: 5px;
          transition: all 0.5s ease;
          &:hover{
            transition:all 0.5s ease;
            background: rgba(255, 255, 255, 0.1);
          }
          a{
            width: 100%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-decoration: none;
            font-size: 0.9rem;
            gap: 10px;
            color: white;
            p{
              font-size: 0.8rem;
              color: rgba(222, 222, 222, 0.82);
              font-family: 'Inclusive Sans', sans-serif;
            }
          }
        }
      }
    }
  }
</style>