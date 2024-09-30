<script setup>
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: 'sk-proj-Db1zlswVmOG5WVmjBAhhT3BlbkFJt4FMAXDmgKP1uEtUC3FT', dangerouslyAllowBrowser: true })
const apiToken = '8uh6zJGcRIonFcjwVCxmZp15oynli05U'

const mobileOpen = ref(false)
const projects = inject('projects')
const settings = inject('settings')
const platform = inject('platform')
const user = inject('user')
const userValue = user.value
const state = inject('state')
const loading = ref(false)
const message = ref('')
const messageLoading = ref(false)
const selectedProject = inject('selectedProject')
const chatEl = ref(null)

async function submitMessage(msg) {
  if (msg) message.value = msg
  if (!message.value) return
  if (messageLoading.value) return

  messageLoading.value = true

  // Check if projects.value is defined and is an array
  if (!Array.isArray(projects.value)) {
    console.error('projects.value is not an array or is undefined')
    messageLoading.value = false
    return
  }

  const index = projects.value.findIndex(
    conversation => conversation.id === state.value.projects.selected,
  )

  // Check if the active conversation was found
  if (index === -1) {
    console.error('Active conversation not found')
    messageLoading.value = false
    return
  }

  // Check if messages array exists in the active conversation, if not, create it...
  if (!Array.isArray(projects.value[index].messages)) projects.value[index].messages = []

  const newMessage = {
    type: 'sent',
    text: message.value,
    time: 'Just now',
    attachments: [],
  }

  // Add new message to the UI
  projects.value[index].messages.push(newMessage)

  // Get a response to the new message
  const messages = convertToOpenAIMessages(projects.value[index].messages)

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
    })

    const newResponse = {
      type: 'received',
      text: chatCompletion.choices[0].message.content,
      time: 'Just now',
      attachments: [],
    }

    // Add the response to the UI
    projects.value[index].messages.push(newResponse)

    // Check if this project template does something with responses...
    let process = projects.value[index].settings?.template?.process
    console.log('Processing response')
    if (process === 'all') {
      // Check if it's the first response...
      console.log('Processing all responses', index)
      if (index === 1) {
        projects.value[index].content = newResponse.text
      }
    }

    // Write the messages array to the project
    await platform.update('projects', projects.value[index].id, projects.value[index])

    message.value = ''
    messageLoading.value = false

    await nextTick()

    if (chatEl.value) {
      chatEl.value.scrollTo({
        top: chatEl.value.scrollHeight,
        behavior: 'smooth',
      })
    }
  }
  catch (error) {
    console.error('Error during message submission:', error)
    messageLoading.value = false
  }
}

function convertToOpenAIMessages(messages) {
  return messages.map((message) => {
    let role = message.type === 'received' ? 'assistant' : 'user'
    return {
      role: role,
      content: message.text,
    }
  })
}

</script>

<template>
  <div
    class="dark:bg-muted-950 flex h-full flex-auto flex-col bg-white p-4"
  >
    <div
      class="bg-muted-100 dark:bg-muted-900 flex h-full flex-auto shrink-0 flex-col overflow-hidden rounded-2xl"
    >
      <div class="relative flex h-full flex-col">
        <div
          ref="chatEl"
          class="relative flex h-full flex-col px-4 pb-24 pt-12"
          :class="
            loading ? 'overflow-hidden' : 'overflow-y-auto nui-slimscroll'
          "
        >
          <!-- Loader-->
          <div
            class="bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
            :class="
              loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
            "
          >
            <div class="mt-12 space-y-12">
              <div class="flex w-full max-w-md gap-4">
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                  <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                </div>
              </div>
              <div class="flex w-full max-w-md gap-4">
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                  <BasePlaceload class="h-3 w-full max-w-48 rounded" />
                </div>
              </div>
              <div
                class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
              >
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload
                    class="ms-auto h-3 w-full max-w-64 rounded"
                  />
                  <BasePlaceload
                    class="ms-auto h-3 w-full max-w-48 rounded"
                  />
                </div>
              </div>
              <div
                class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
              >
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload
                    class="ms-auto h-3 w-full max-w-56 rounded"
                  />
                  <BasePlaceload
                    class="ms-auto h-3 w-full max-w-32 rounded"
                  />
                </div>
              </div>
              <div class="flex w-full max-w-md gap-4">
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                  <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                </div>
              </div>
              <div class="flex w-full max-w-md gap-4">
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                  <BasePlaceload class="h-3 w-full max-w-48 rounded" />
                </div>
              </div>
            </div>
          </div>
          <!-- Messages loop -->
          <div v-if="!loading" class="space-y-12">
            <div
              v-for="(item, index) in selectedProject?.messages"
              :key="index"
              class="relative flex w-full gap-4"
              :class="[
                item.type === 'received' ? 'flex-row' : 'flex-row-reverse',
                item.type === 'separator' ? 'justify-center' : '',
              ]"
            >
              <template v-if="item.type !== 'separator'">
                <div class="shrink-0">
                  <!-- <BaseAvatar
                        v-if="item.type === 'received'"
                        :src="selectedProject?.user.photo"
                        size="xs"
                      /> -->
                  <BaseAvatar
                    v-if="item.type === 'sent'"
                    :src="settings.app.api.assets + userValue.avatar.filename_disk"
                    size="xs"
                  />
                </div>
                <div class="flex max-w-md flex-col">
                  <div
                    class="text-muted-800 dark:text-muted-200 rounded-xl p-4"
                    :class="[
                      item.type === 'received'
                        ? 'bg-muted-200 dark:bg-muted-950 rounded-ss-none'
                        : '',
                      item.type === 'sent'
                        ? 'bg-primary-500/20 rounded-se-none'
                        : '',
                    ]"
                  >
                    <p class="font-sans text-sm">
                      {{ item.text }}
                    </p>
                  </div>
                  <div
                    class="text-muted-400 mt-1 font-sans text-xs"
                    :class="item.type === 'received' ? 'text-end' : ''"
                  >
                    {{ item.time }}
                  </div>
                  <div
                    v-if="item.attachments.length > 0"
                    class="mt-2 space-y-2"
                  >
                    <template
                      v-for="(attachment, idx) in item.attachments"
                      :key="idx"
                    >
                      <div
                        v-if="attachment.type === 'image'"
                        class="dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2"
                        :class="item.type === 'sent' ? 'ms-auto' : ''"
                      >
                        <img
                          :src="attachment.image"
                          :alt="attachment.text"
                          class="rounded-xl"
                        >
                      </div>
                      <NuxtLink
                        v-else-if="attachment.type === 'link'"
                        :to="attachment.url"
                        class="dark:bg-muted-950 block max-w-xs rounded-2xl bg-white p-2"
                        :class="item.type === 'sent' ? 'ms-auto' : ''"
                      >
                        <img
                          :src="attachment.image"
                          :alt="attachment.text"
                          class="rounded-xl"
                        >
                        <div class="px-1 py-2">
                          <p
                            class="text-muted-800 dark:text-muted-100 font-sans"
                          >
                            {{
                              attachment.url?.replace(/(^\w+:|^)\/\//, '')
                            }}
                          </p>
                          <p class="text-muted-400 font-sans text-xs">
                            {{ attachment.text }}
                          </p>
                        </div>
                      </NuxtLink>
                    </template>
                  </div>
                </div>
              </template>
              <div v-else>
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div
                    class="border-muted-300/50 dark:border-muted-800 w-full border-t"
                  />
                </div>
                <div class="relative flex justify-center">
                  <span
                    class="bg-muted-100 dark:bg-muted-900 text-muted-400 px-3 font-sans text-xs uppercase"
                  >
                    {{ item.time }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Compose-->
        <div class="absolute inset-x-0 bottom-4 w-full px-4">
          <form
            method="POST"
            action=""
            class="dark:bg-muted-950 flex h-16 flex-row items-center gap-2 rounded-xl bg-white px-3"
            @submit.prevent="submitMessage()"
          >
            <div class="hidden sm:block">
              <button
                class="hover:bg-muted-100 dark:hover:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hidden size-10 items-center justify-center rounded-xl transition-colors duration-200 focus:outline-none sm:flex"
              >
                <Icon name="lucide:paperclip" class="size-5" />
              </button>
            </div>
            <div class="grow">
              <div class="relative w-full">
                <BaseInput
                  v-model.trim="message"
                  :disabled="messageLoading"
                  rounded="lg"
                  :classes="{
                    input: 'pe-10',
                  }"
                  placeholder="Write a message..."
                />
                <button
                  class="text-muted-400 hover:text-muted-600 absolute right-0 top-0 flex h-full w-12 items-center justify-center"
                >
                  <svg
                    class="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <BaseButton
                type="submit"
                color="primary"
                rounded="lg"
              >
                <span>Send</span>
                <Icon
                  name="ph:paper-plane-right-duotone"
                  class="!hidden size-5 sm:!block"
                />
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
