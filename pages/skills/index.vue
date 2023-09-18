<template>
    <div class="content">
        <div class="skills">
            <h1 class="skills-title">Languages and frameworks <br> I have <strong>experience</strong> with</h1>
            <SkillList :skills="skillList"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SkillList from '@/components/skills/SkillList.vue';
const skillList = [
    {
        id:1,
        name:'Html',
        image:'https://cdn.worldvectorlogo.com/logos/html-1.svg',
        exp_count:90
    },
    {
        id:2,
        name:'Javascript',
        image:'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
        exp_count:85
    },
    {
        id:3,
        name:'Css',
        image:'https://cdn.worldvectorlogo.com/logos/css-3.svg',
        exp_count:85
    },
    {
        id:4,
        name:'Node.js',
        image:'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        exp_count:45
    },
    {
        id:5,
        name:'Php',
        image:'https://cdn.worldvectorlogo.com/logos/php-1.svg',
        exp_count:25
    },
    {
        id:6,
        name:'Nuxt',
        image:'https://cdn.worldvectorlogo.com/logos/nuxt-2.svg',
        exp_count:70
    },
    {
        id:7,
        name:'Vue.js',
        image:'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg',
        exp_count:65
    },
    {
        id:8,
        name:'Next.js',
        image:'https://cdn.worldvectorlogo.com/logos/next-js.svg',
        exp_count:20
    },
    {
        id:9,
        name:'Tailwind',
        image:'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
        exp_count:70
    },
    {
        id:10,
        name:'Bootstrap',
        image:'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg',
        exp_count:35
    },
    {
        id:11,
        name:'MongoDb',
        image:'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
        exp_count:50
    },
    {
        id:12,
        name:'Mysql',
        image:'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
        exp_count:70
    }
]
</script>

<style lang="scss">
.skills{
    .skills-title{
        color:white;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.6rem;
        strong{
            color: rgba(29,208,93);
        }
    }
}
</style>