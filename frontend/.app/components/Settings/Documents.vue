<script setup lang="ts">
</script>

<template>
  <form class="w-full pb-16">
    <BaseCard>
      <div class="space-y-8 p-4">
        <div>
          <BasePlaceholderPage
            title="No documents yet"
            subtitle="You haven't added any documents yet. Start uploading to fine-tune your assistants even better, or create new documents with your assistants to start fresh."
            class="scale-90"
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-6.svg"
                alt="Placeholder image"
              >
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-6-dark.svg"
                alt="Placeholder image"
              >
            </template>
            <BaseButton class="mt-4 w-40">
              Upload
            </BaseButton>
          </BasePlaceholderPage>
        </div>
      </div>
    </BaseCard>
  </form>
</template>
