<script setup>
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: 'sk-proj-Db1zlswVmOG5WVmjBAhhT3BlbkFJt4FMAXDmgKP1uEtUC3FT', dangerouslyAllowBrowser: true })
const apiToken = '8uh6zJGcRIonFcjwVCxmZp15oynli05U'

const mobileOpen = ref(false)
const projects = inject('projects')
const settings = inject('settings')
const platform = inject('platform')
const user = inject('user')
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
  state.value.projects.chat.responding = true

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
    state.value.projects.chat.responding = true

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
          <ProjectsChatLoader v-if="loading" />
          <!-- Messages loop -->
          <div v-if="!loading" class="space-y-12">
            <div
              v-for="(item, index) in selectedProject.messages"
              :key="index"
              class="relative flex w-full gap-4"
              :class="[
                item.type === 'received' ? 'flex-row' : 'flex-row-reverse',
                item.type === 'separator' ? 'justify-center' : '',
              ]"
            >
              <ProjectsChatMessage :item="item" v-if="item.type !== 'separator'" />
              <ProjectsChatSeparator :item="item" v-else />
            </div>
          </div>
        </div>
        <ProjectsChatCompose @submit="submitMessage"/>
      </div>
    </div>
  </div>
</template>
