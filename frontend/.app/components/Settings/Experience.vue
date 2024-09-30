<script setup lang="ts">
const config = useRuntimeConfig();

definePageMeta({
  title: 'Brand',
  preview: {
    title: 'Brand info',
    description: 'For editing a user profile',
    categories: ['layouts', 'profile', 'forms'],
    src: '/img/screens/layouts-subpages-profile-edit-2.png',
    srcDark: '/img/screens/layouts-subpages-profile-edit-2-dark.png',
    order: 77,
  },
  pageTransition: {
    enterActiveClass: 'transition-all duration-500 ease-out',
    enterFromClass: 'translate-y-20 opacity-0',
    enterToClass: 'translate-y-0 opacity-100',
    leaveActiveClass: 'transition-all duration-200 ease-in',
    leaveFromClass: 'translate-y-0 opacity-100',
    leaveToClass: 'translate-y-20 opacity-0',
  },
})

// TODO - Remove + call from state management

const API = config.public.API
const PROTOCOL = config.public.PROTOCOL
const apiUrl = `${PROTOCOL}${API}`
const apiToken = '8uh6zJGcRIonFcjwVCxmZp15oynli05U'
const brandEndpoint = '/items/brands/520bb16f-fe1f-4a1c-b8b1-d2fd1d73d542'

async function fetchBrand() {
  try {
    const response = await fetch(`${apiUrl}${brandEndpoint}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    })

    if (!response.ok) throw new Error(`An error occurred: ${response.statusText}`)

    const data = await response.json()
    return data.data // Assuming the API response has a 'data' field containing the items
  }
  catch (error) {
    console.error('Error fetching brand:', error)
    return null
  }
}

const brand = ref({})
fetchBrand().then((data) => {
  if (data) {
    console.log('Fetched brand:', data.id)
  }
  else {
    console.log('Failed to fetch brand.')
  }
  brand.value = (data)
})
</script>

<template>
  <form class="w-full pb-16">
    <BaseCard>
      <div class="flex items-center justify-between p-4">
        <div>
          <BaseHeading
            tag="h2"
            size="sm"
            weight="medium"
            lead="normal"
            class="uppercase tracking-wider"
          >
            Brand Information
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            Track basic details, members, and more.
          </BaseText>
        </div>
        <div class="flex items-center gap-2">
          <BaseButton class="w-24" to="/index2">
            Cancel
          </BaseButton>
          <BaseButton color="primary" class="w-24">
            Save
          </BaseButton>
        </div>
      </div>
      <div class="p-4">
        <div v-if="!brand">
          <BasePlaceholderPage
            title="No organization info"
            subtitle="Looks like you haven't defined your organization yet. Get started with the onboarding process below to fine-tune your assistants better."
            class="scale-90"
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                alt="Placeholder image"
              >
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                alt="Placeholder image"
              >
            </template>
            <BaseButton class="mt-4 w-40">
              Start now
            </BaseButton>
          </BasePlaceholderPage>
        </div>
        <div v-else class="mx-auto max-w-lg space-y-12 py-8">
          <TairoFormGroup
            label="Previous Experiences"
            sublabel="This will help others assess your experience"
          >
            <div class="space-y-8">
              <div
                v-for="item in data.personalInfo.experiences"
                :key="item.company"
                class="flex w-full items-center gap-2"
              >
                <img
                  :src="item.logo"
                  :alt="item.company"
                  class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"
                >
                <div>
                  <BaseHeading
                    tag="h3"
                    size="sm"
                    weight="medium"
                  >
                    {{ item.company }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.period }}</span>
                  </BaseParagraph>
                  <BaseParagraph size="xs" class="text-primary-500">
                    <span>{{ item.position }}</span>
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseDropdown
                    variant="context"
                    label="Dropdown"
                    placement="bottom-end"
                    size="md"
                    class="z-20"
                    rounded="lg"
                  >
                    <BaseDropdownDivider />
                    <BaseDropdownItem
                      to="#"
                      title="Edit"
                      text="Edit this experience"
                    >
                      <template #start>
                        <Icon
                          name="ph:pencil-duotone"
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Delete"
                      text="Delete this experience"
                    >
                      <template #start>
                        <Icon
                          name="ph:trash-duotone"
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
              </div>
            </div>
            <div
              class="border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"
            >
              <div
                class="bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex size-[50px] items-center justify-center rounded-full"
              >
                <Icon name="ph:suitcase-duotone" class="size-5" />
              </div>
              <div>
                <BaseHeading
                  tag="h3"
                  size="sm"
                  weight="medium"
                >
                  New Experience
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new work experience item</span>
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon rounded="full" size="sm">
                  <Icon name="lucide:plus" class="size-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </TairoFormGroup>
        </div>
      </div>
    </BaseCard>
    <TairoFormSave />
  </form>
</template>
