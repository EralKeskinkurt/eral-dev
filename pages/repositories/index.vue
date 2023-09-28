<template>
    <div class="content">
      <div class="repository">
        <h1 class="repository-title"><strong>Repositories</strong></h1>
        <RepositoryList :repositories="repositories" />
      </div>
    </div>
</template>

<script lang="ts" setup>
import RepositoryList from '~/components/repositories/RepositoryList.vue';
import {GITHUB_AUTHORIZATION} from "~/composables/services/spotify/constants";
const repositories = await $fetch('https://api.github.com/users/EralKeskinkurt/repos', {
  method:'GET',
  headers:{
    Authorization:GITHUB_AUTHORIZATION,
    "X-GitHub-Api-Version": "2022-11-28"
  }
})
</script>

<style lang="scss">
.repository{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 950px) {
    align-items: center;
  }
    .repository-title{
        color:white;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.6rem;
        @media screen and (max-width: 950px) {
          text-align: center;
          margin-top: 50px;
        }
        strong{
            color: rgba(29,208,93);
        }
    }
}
</style>