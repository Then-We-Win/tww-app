<script setup>
const state = inject('state')
const strings = inject('strings')
const emit = defineEmits(['submit'])
function submitMessage() {
  emit('submit', message)
}
const message = ref('')
</script>

<template>
  <div class="absolute inset-x-0 bottom-4 w-full px-4">
    <form
      method="POST"
      action=""
      class="dark:bg-muted-950 flex h-16 flex-row items-center gap-2 rounded-xl bg-white px-3"
      @submit.prevent="submitMessage()"
    >
      <!-- <div class="hidden sm:block">
        <button
          class="hover:bg-muted-100 dark:hover:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hidden size-10 items-center justify-center rounded-xl transition-colors duration-200 focus:outline-none sm:flex"
        >
          <Icon name="lucide:paperclip" class="size-5" />
        </button>
      </div> -->
      <div class="grow">
        <div class="relative w-full">
          <BaseInput
            v-model.trim="message"
            :disabled="state.projects.chat.responding"
            rounded="lg"
            :classes="{
              input: 'pe-10',
            }"
            :placeholder="strings.projects.new.chat.placeholder"
          />
          <!-- <button
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
          </button> -->
        </div>
      </div>
      <div>
        <BaseButton
          type="submit"
          color="primary"
          rounded="lg"
        >
          <span>{{strings.projects.new.chat.text}}</span>
          <Icon
            :name="strings.projects.new.chat.icon"
            class="!hidden size-5 sm:!block"
          />
        </BaseButton>
      </div>
    </form>
  </div>
</template>
