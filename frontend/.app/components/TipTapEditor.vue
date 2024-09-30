<template>
  <div>
    This is the editor component
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'

const editor = ref(null)

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Link,
    ],
    content: '<p>Hello World!</p>',
  })
})

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy()
  }
})
</script>

<style>
/* Add any custom styles for your editor here */
</style>
