<template>
    <nav class="navbar">
        <ul class="navbar-nav">
            <li><NuxtLink class="nav-link" active-class="active" to="/" ><HouseIcon size="25" /><b class="link-hover-info">Home</b></NuxtLink></li>
            <li><NuxtLink class="nav-link" active-class="active" to="/repositories"><RepositoryIcon size="25" /><b class="link-hover-info">Repositories</b></NuxtLink></li>
            <li><NuxtLink class="nav-link" active-class="active" to="/blogs"><BlogIcon size="25" /><b class="link-hover-info">Blogs</b></NuxtLink></li>
            <li v-if="isTrue"><a @click="useRouter().push('/blogs')" class="nav-link"><BackIcon size="25" /><b class="link-hover-info">Back</b></a></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { Icon } from '#components'
import {useRouter} from "#app";
const BlogIcon = h(Icon, { name: 'carbon:blog' })
const BackIcon = h(Icon, { name: 'iconamoon:backspace-thin' })
const HouseIcon = h(Icon, { name: 'ph:house-simple' })
const RepositoryIcon = h(Icon, { name: 'ri:git-repository-line' })
const isTrue = ref(false)
watchEffect(() => {
  const {path} = useRoute()
  if(path.slice(0, 6) == '/blogs' && path.length > 7){
    isTrue.value = true
  }else{
    isTrue.value = false
  }
})
</script>

<style lang="scss">
.navbar{
    position: fixed;
    width: 100%;
    z-index: 999;
    height: auto;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    .navbar-nav{
        background: rgba(255, 255, 255, 0.027);
        border: 1px solid rgba(255, 255, 255, 0.356);
        max-width: 600px;
        border-radius: 5px;
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 30px;
        gap: 15px;
        color:white;
        li{
            .active{
                color:rgba(29,208,93,0.9) !important;
            }
            .nav-link{
                text-decoration: none;
                color: white;
                background: none;
                border: none;
                cursor: pointer;
                font-family: 'Source Code Pro', monospace;
                position: relative;     
                &:hover{
                    transition: all 0.6s;
                    color: rgba(29,208,93,0.9);
                    b{
                        opacity: 1;
                        color: white;
                        transition: all 0.6s;
                    }
                }
                b{
                    opacity: 0;
                    pointer-events: none;
                    width: auto;
                    position: absolute;
                    top: -36px;
                    background: transparent;
                    right: 0;
                    font-size: 0.8rem;
                    user-select: none;
                }
            }
        }
    }
}
</style>
