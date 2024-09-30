<template>
  <div class="mt-4">
    <div class="mb-3 flex items-center justify-center">
      <BasePlaceload
        class="size-24 shrink-0 rounded-full"
        :width="96"
        :height="96"
      />
    </div>
    <div class="flex flex-col items-center">
      <BasePlaceload class="mb-2 h-3 w-full max-w-40 rounded" />
      <BasePlaceload class="mb-2 h-3 w-full max-w-24 rounded" />
      <div class="my-4 flex w-full flex-col items-center">
        <BasePlaceload class="mb-2 h-2 w-full max-w-60 rounded" />
        <BasePlaceload class="mb-2 h-2 w-full max-w-52 rounded" />
      </div>
      <div class="mb-6 flex w-full items-center justify-center">
        <div class="px-4">
          <BasePlaceload class="h-3 w-14 rounded" />
        </div>
        <div class="px-4">
          <BasePlaceload class="h-3 w-14 rounded" />
        </div>
      </div>
      <div class="w-full">
        <BasePlaceload class="h-10 w-full rounded-xl" />
        <BasePlaceload class="mx-auto mt-3 h-3 w-[7.5rem] rounded" />
      </div>
    </div>
  </div>
</template>
