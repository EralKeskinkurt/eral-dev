<template>
  <div class="spotify">
    <div v-if="!data || (!!data && !data?.isPlaying)" class="current-music-not">Not Listening...</div>
    <a v-if="!!data && data.isPlaying" :href="data.trackUrl" class="current-music-main" target="_blank">
      <img :src="data.albumArtUrl" class="current-music-img" />
      <div class="current-music-text">
        <p class="current-music-artist">{{ data.artist }}</p>
        <p class="current-music-title">
          {{ data.trackTitle }}
        </p>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { GetNowPlayingTransformed } from "@/composables/services/spotify/user/now-playing/types";
interface SpotifyNowListeningProps {
  data: GetNowPlayingTransformed;
}
const props = defineProps<SpotifyNowListeningProps>();
const data = props.data;
</script>


<style lang="scss">
  .spotify{
    margin:50px auto 0 auto;
    max-width: 250px;
    width: 250px;
    max-height: 70px;
    height: auto;
    border: 1px solid rgba(29,208,93,0.6);
    border-radius: 5px;
    background: rgba(29,208,93,0.10);
    .current-music-not{
      text-align: center;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      height: 70px;
    }
    .current-music-main{
      text-decoration: none;
      display: flex;
      gap: 16px;
      padding: 10px;
      .current-music-img{
        width: 50px;
        height: 50px;
        border-radius: 3px;
        object-fit: cover;
      }
      .current-music-text{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        overflow: hidden;
        .current-music-artist{
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .current-music-title{
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.7rem;
          font-weight: 600;
          // animation: slip 10s ease infinite;
        }
        // @keyframes slip {
        //   0%{
        //     transform: translateX(400%);
        //   }
        //   100%{
        //     transform: translateX(-200px);
        //   }
        // }
      }
    }
  }
</style>