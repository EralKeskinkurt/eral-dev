<template>
  <div class="spotify">
    <p v-if="!data || (!!data && !data?.isPlaying)" class="">Not Listening</p>

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
    margin-top: 10px;
    max-width: 250px;
    width: 250px;
    min-height: 50px;
    height: auto;
    border: 1px solid rgba(29,208,93,0.6);
    border-radius: 5px;
    background: rgba(29,208,93,0.20);
    .current-music-main{
      text-decoration: none;
      display: flex;
      gap: 8px;
      padding: 10px;
      .current-music-img{
        width: 50px;
        height: 50px;
        border-radius: 3px;
      }
      .current-music-text{
        display: flex;
        align-items: start;
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