<template>
  <button @click="clickMe">Click me</button>
  {{ skillStore.getSkills }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { notification } from '@tauri-apps/api'
import { useSkillStore } from '@/store'
const skillStore = useSkillStore()
const { t } = useI18n()
const clickMe = async () => {
  try {
    await skillStore.fetchSkillsFs()
  } catch (err) {
    notification.sendNotification({
      title: t('errors.error'),
      body: t('errors.skill.fetchSkillBody'),
    })
  }
}
</script>
