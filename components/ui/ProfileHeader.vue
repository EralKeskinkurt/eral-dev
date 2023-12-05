<template>
  <div class="content">
    <div class="sticky-content">
      <section class="profile-header">
        <img class="profile-images" src="/profile.jpg" alt="profile photo"/>
        <div class="profile-info">
          <h1 class="name">Eral Keskinkurt</h1>
          <div>
            <EnvelopeLogo class="envelope" size="18"/>
            <span class="email">eralkeskinkurt@gmail.com</span></div>
          <ul class="social-media">
            <li><a href="https://www.instagram.com/eral_keskinkurt/" target="_blank">
              <InstagramLogo class="instagram" size="25"/>
            </a></li>
            <li><a href="https://www.facebook.com/eral.keskinkurt.94/" target="_blank">
              <FacebookLogo class="facebook" size="25"/>
            </a></li>
            <li><a href="https://github.com/EralKeskinkurt" target="_blank">
              <GithubLogo class="github" size="25"/>
            </a></li>
            <li><a href="https://www.linkedin.com/in/eral-keskinkurt-255b27255/" target="_blank">
              <LinkedinLogo class="linkedin" size="25"/>
            </a></li>
            <li><a href="https://www.buymeacoffee.com/eralkeskin" target="_blank">
              <BuyCoffee class="buy-coffee" size="20"/>
            </a></li>
          </ul>
        </div>
      </section>
      <SkillSlide/>
      <NowListening :data="nowPlayingData"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NowListening from "@/components/spotify/NowListening.vue"
import {Icon, SpotifyNowListening} from '#components'
import SkillSlide from "~/components/ui/SkillSlide.vue";

const nowPlayingData = await $fetch('/api/now-playing');
const InstagramLogo = h(Icon, {name: "ph:instagram-logo"})
const FacebookLogo = h(Icon, {name: 'ph:facebook-logo'})
const GithubLogo = h(Icon, {name: 'ph:github-logo'})
const LinkedinLogo = h(Icon, {name: 'ph:linkedin-logo'})
const EnvelopeLogo = h(Icon, {name: 'ph:envelope'})
const BuyCoffee = h(Icon, {name: 'simple-icons:buymeacoffee'})

// ph:instagram-logo ph:facebook-logo pajamas:github ph:linkedin-logo ph:envelope
</script>

<style lang="scss">
.sticky-content {
  width: 100%;
  height: 100%;
  position: sticky;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  @media screen and (max-width: 950px) {
    position: relative;
  }
  .profile-header {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    gap: 20px;

    .envelope {
      color: #ece033;
    }

    .buy-coffee {
      color: #b0a726;
    }

    .email {
      color: white;
      font-size: 0.8rem;
      margin-left: 2px;
    }

    .profile-images {
      width: 150px;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 0 7px 1px rgba(255, 255, 255, 0.185);
    }

    .name {
      font-size: 1.2rem;
      color: white;
      font-weight: 500;
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .social-media {
        display: flex;
        align-items: center;
        gap: 15px;

        li {
          cursor: pointer;

          .instagram {
            color: #5851D8;
          }

          .facebook {
            color: #087ae9;
          }

          .github {
            color: #bdc3c9;
          }

          .linkedin {
            color: #0a66c2;
          }
        }

      }
    }
  }
}



</style>
