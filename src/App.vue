<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component" />

        <template #fallback>
          Loading...
          <img src="./assets/logo.png" />
        </template>
      </Suspense>
    </template>
  </RouterView>
</template>

<script setup lang="ts">
// TODO the initial page should be the current played character sheet. It will contain a dropdown to switch the sheet over to a different
// world. The worlds can be added on an edit sheet page. The edit sheet page will contain the optional ability to import universal skills
// There will be an edit button directly in the page that will send you over, for ease of use.
// It will also contain the ability to import specific acclimatedable skills. Each with a dialog to confirm.
// There will be a magics page. There will be a button on top that has the ability to pull out another desktop window. (both pages)
// The magic page will also have the ability to change the world, as well as changing the magic.
// There will be a search bar on both pages that allows you to search the text of magics and skills
// There will be a tooltip for the skills that pulls out the description of the skill
// There will be an export ability for skills
// There will be the ability to create a new magic with the world. The worlds will be a dropdown with the ability to also custom world name if
// There is no worlds in the dropdown
// The create magic will be a new page that will add it all to a list, then allow the ability to export the list to json.
// Then it is recommended to upload it to github, at which point it can be updated to everyone. (observe commits, nobody will be allowed to submit random items)
</script>
