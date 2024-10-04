<script setup>
const loading = ref(false)
const selectedProject = inject('selectedProject')
const documentHistory = ref([])

function reprocessDocument() {
  console.log('Reprocessing document')
  loading.value = true
  documentHistory.value = []
  let idx = 0
  // Go through each message and see if there are any construction entries...
  selectedProject.value.messages.forEach(message => {
    // Only process AI messages...
    if (message.type === 'received') {
      let obj = message.text
      try {
        obj = JSON.parse(obj)
      } catch (e) {
        // console.log('Failed to parse JSON:', e)  // Log the error if parsing fails
      }
      // if we have an object, it's a construction message...
      if (typeof obj === 'object') {
        idx++
        let msg = {
          content: obj.data,
          title:`App Revision ${idx}`
        }
        documentHistory.value.push(msg)
      }
    }
  })
  loading.value = false
  // Write the document history to the selected project...
  selectedProject.value.documentHistory = documentHistory
  // console.log('Document history:', documentHistory)
}
reprocessDocument()
// Watch for changes to the selected project...
watch(selectedProject, () => { reprocessDocument() })
</script>

<template>
  <div v-if="selectedProject.documentHistory.length > 0">
    AI suggestions
    <div class="md:max-w-lg">
      <BaseAccordion :items="selectedProject.documentHistory" exclusive />
    </div>
  </div>
</template>
