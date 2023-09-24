<template>
    <div class="container layout">
        <ProfileHeader />
        <slot/>
        <Navbar />
    </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/ui/Navbar.vue"
import ProfileHeader from "@/components/ui/ProfileHeader.vue"
</script>

<style lang="scss">
.layout{
    display: grid;
    grid-template-columns: 30% calc(70% - 80px);
    gap: 80px;
    justify-content: start;
    position: relative;
}
</style>