<template>
    <div>
        <div class="main">
            <img class="profile-images" src="@/assets/images/profile.jpeg" />
            <h1 class="name">Eral Keskinkurt</h1>
            <SpotifyNowListening :data="nowPlayingData" />
        </div>
    </div>
</template>

<script setup lang="ts">
const nowPlayingData = await $fetch('/api/now-playing');
</script>

<style lang="scss">
.main{
    display: flex;
    flex-direction: column;
    padding: 20px;
    .profile-images{
        margin-bottom: 10px;
        max-width: 150px;
        max-height: 150px;
        object-fit: cover;
        border-radius: 10px;
    }
    .name {
        font-size: 1.1rem;
        color:white;
        font-weight: 500;
    }
}
</style>