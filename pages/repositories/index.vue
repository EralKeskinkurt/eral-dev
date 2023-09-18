<template>
    <div>
        <pre>
            {{ repositories }}
        </pre>
    </div>
</template>

<script lang="ts" setup>
const repositories = await $fetch('https://api.github.com/users/EralKeskinkurt/repos', {
  method:'GET',
  headers:{
    Authorization:'Bareer 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',
    "X-GitHub-Api-Version": "2022-11-28"
  }
})
</script>

<style>
pre{
    color: white !important;
}
</style>