<template>
    <div>
        <ul class="repository-list">
            <li  v-for="repo in props.repositories" :key="repo.id" :style="`border: 1px solid ${colorLang(repo.language)};`" class="repository-item">
                <a :href="repo.html_url" class="repo-name">{{ repo.name }}</a>
                <p v-if="repo.description" class="repo-desc">{{ repo.description }}</p>
                <div class="repo-actions">
                    <span :style="`color: ${colorLang(repo.language)};`">{{ repo.language }}</span>
                   <div class="star-fork">
                    <span class="repo-star"><StarIcon /> {{ repo.stargazers_count }}</span>
                    <a :href="repo.forks_url"><ForkIcon /> {{ repo.forks_count }}</a>
                   </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '#components'
const props = defineProps({
    repositories:{
        type:Array
    }
})
const StarIcon = h(Icon, { name: 'ic:twotone-star-border' })
const ForkIcon = h(Icon, { name: 'tabler:git-fork' })
const colorLang = (lang:string) => {
    switch (lang) {
        case "Astro":
            return "#7c4225"
        case "Vue":
            return "#41b883"
        default:
            return "#FFF";
    }
}
</script>

<style lang="scss">
.repository-list{
        padding-top: 30px;
        padding-bottom: 20px;
        max-width: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        background: transparent;
        .repository-item{
            width: 300px;
            background: rgba(255, 255, 255, 0.055);
            height: 80px;
            border: 1px solid rgba(255, 255, 255, 0.322);
            border-radius: 5px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            gap: 9px;
            .repo-name{
                font-size: 0.8rem;
                color: white;
                font-weight: 500;
                text-decoration: none;
                &:hover{
                    color: rgb(149, 183, 245);
                    transition: all 0.3s;
                }
            }
            .repo-desc{
                color: rgba(255, 255, 255, 0.459);
                font-size: 0.7rem;
                font-family: 'Inclusive Sans', sans-serif;
                max-height: 37px;
                line-height: 0.9rem;
                overflow: hidden;
            }
            .repo-actions{
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                width: 100%;
                gap: 10px;
                font-size: 0.8rem;
                .repo-star{
                    display: flex;
                    align-items: center;
                    gap:2px;
                    &:hover{
                        color: rgba(29,208,93,0.9);
                        transition: all 0.3s;
                    }
                }
                .star-fork{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                a{
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    color: white;
                    &:hover{
                        color: rgba(29,208,93,0.9);
                        transition: all 0.3s;
                    }
                }
            }
        }
}
</style>