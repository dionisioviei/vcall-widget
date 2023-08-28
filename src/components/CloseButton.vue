


<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue';
import { PhX } from "@phosphor-icons/vue";


</script>

<template>
    <PopoverButton title='Fechar popover' aria-label='Fechar popover'
        class='tw-top-5 tw-right-5 tw-absolute tw-text-zinc-400 hover:tw-text-zinc-100 tw-bg-transparent'>
        <PhX weight='bold' class='tw-w-4 tw-h-4' />
    </PopoverButton>
</template>
