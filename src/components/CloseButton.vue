<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import { PhX } from '@phosphor-icons/vue'

defineProps<{
  colorScheme?: 'light' | 'dark'
}>()
</script>

<template>
  <PopoverButton
    title="Fechar popover"
    aria-label="Fechar popover"
    class="tw-top-5 tw-right-5 tw-absolute tw-bg-transparent tw-transition-colors"
    :class="{
      'tw-text-zinc-400 hover:tw-text-zinc-100': colorScheme === 'dark',
      'tw-text-gray-600 hover:tw-text-gray-900': colorScheme === 'light'
    }"
  >
    <PhX weight="bold" class="tw-w-4 tw-h-4" />
  </PopoverButton>
</template>
