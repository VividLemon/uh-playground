<template>
  <button @click="clickMe">Click me</button>
  {{ skillStore.getSkills }}
</template>

<script setup lang="ts">
import { useSkillStore } from '@/store'
const skillStore = useSkillStore()
const clickMe = async () => await skillStore.fetchSkillsFs()
</script>
