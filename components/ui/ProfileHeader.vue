<template>
    <div class="content">
        <section class="profile-header">
            <img class="profile-images" src="@/assets/images/profile.jpeg" />
            <div class="profile-info">
                <h1 class="name">Eral Keskinkurt</h1>
                <div><EnvelopeLogo class="envelope" size="25"/> <span class="email">eralkeskinkurt@gmail.com</span></div>
                <ul class="social-media">
                    <li><a href="https://www.instagram.com/eral_keskinkurt/" target="_blank"><InstagramLogo class="instagram"  size="25"/></a></li>
                    <li><a href="https://www.facebook.com/eral.keskinkurt.94/" target="_blank"><FacebookLogo class="facebook" size="25"/></a></li>
                    <li><a href="https://github.com/EralKeskinkurt" target="_blank"><GithubLogo class="github" size="25"/></a></li>
                    <li><a href="https://www.linkedin.com/in/eral-keskinkurt-255b27255/" target="_blank"><LinkedinLogo class="linkedin" size="25"/></a></li>
                </ul>
                <NowListening :data="nowPlayingData" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import NowListening from "@/components/spotify/NowListening.vue"
import { Icon, SpotifyNowListening } from '#components'
const nowPlayingData = await $fetch('/api/now-playing');
const InstagramLogo = h(Icon, { name: "ph:instagram-logo"})
const FacebookLogo = h(Icon, { name: 'ph:facebook-logo' })
const GithubLogo = h(Icon, { name: 'ph:github-logo' })
const LinkedinLogo = h(Icon, { name: 'ph:linkedin-logo' })
const EnvelopeLogo = h(Icon, { name: 'ph:envelope' })
// ph:instagram-logo ph:facebook-logo pajamas:github ph:linkedin-logo ph:envelope
</script>

<style lang="scss">
    .profile-header{
        display: flex;
        width: auto;
        align-self: flex-start;
        justify-content: flex-start;
        padding-left: 20px;
        gap: 20px;
        .envelope{
            color: #ece033;
        }
        .email{
            color:white;
            font-size: 0.8rem;
        }
        .profile-images{
            max-width: 150px;
            width: 150px;
            max-height: 175px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 0 7px 1px rgba(255, 255, 255, 0.185);
        }
        .name {
            font-size: 1.2rem;
            color:white;
            font-weight: 500;
        }
        .profile-info{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            .social-media{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 15px;
                li{
                    cursor: pointer;
                    .instagram{
                        color:#5851D8;
                    }
                    .facebook{
                        color:#087ae9;
                    }
                    .github{
                        color:#bdc3c9;
                    }
                    .linkedin{
                        color:#0a66c2;
                    }
                }
                
            }
        }
    }

</style>