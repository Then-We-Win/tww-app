<template>
  <div
    class="bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
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
</template>
