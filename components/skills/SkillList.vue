<template>
    <ul class="skill-list">
        <li v-for="skill in skills" :key="skill.id" class="skill">
            <div class="img-div">
                <img :src="skill.image" alt="skill image">
                <span class="exp_count">{{ skill.exp_count }}%</span>
            </div>
            <h3>{{ skill.name }}</h3>
        </li>
    </ul>
</template>
<script setup lang="ts">
defineProps({
    skills:{
        type:Array
    }
})

</script>

<style lang="scss">
    .skill-list{
        padding-top: 30px;
        padding-bottom: 20px;
        max-width: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        background: transparent;
        .skill{
            .img-div{
                padding: 18px;
                width: 30px;
                height: 30px;
                position: relative;
                border-radius: 100%;
                border: 1px solid rgba(255, 255, 255, 0.219);
                background: rgba(255, 255, 255, 0.158);
                    .exp_count{
                        position: absolute;
                        bottom: 11px;
                        right: 23px;
                        opacity: 0;
                        pointer-events: none;
                        user-select: none;
                        font-size: 0.7rem;
                    }
                    &:hover{
                        img{
                            transform: scale(0.7) translateY(-10px);
                            transition: all 0.2s;
                        }
                        .exp_count{
                            opacity: 1;
                            transition: all 0.2s;
                        }
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        transition: all 0.2s;
                    }
            }
            h3{
                color: white;
                font-size: 0.8rem;
                text-align: center;
                margin-top: 5px;
            }
        }
    }
</style>