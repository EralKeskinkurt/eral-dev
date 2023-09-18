<template>
    <div class="content">
      <div class="repository">
        <h1 class="repository-title">My <strong>repositories</strong></h1>
        <RepositoryList :repositories="repositories" />
      </div>
    </div>
</template>

<script lang="ts" setup>
import RepositoryList from '~/components/repositories/RepositoryList.vue';
const repositories = await $fetch('https://api.github.com/users/EralKeskinkurt/repos', {
  method:'GET',
  headers:{
    Authorization:'Bareer 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',
    "X-GitHub-Api-Version": "2022-11-28"
  }
})
</script>

<style lang="scss">
.repository{
    .repository-title{
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