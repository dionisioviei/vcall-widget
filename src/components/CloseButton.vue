


<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue';
import { PhX } from "@phosphor-icons/vue";


</script>

<template>
    <PopoverButton title='Fechar popover' aria-label='Fechar popover'
        class='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100'>
        <PhX weight='bold' class='w-4 h-4' />
    </PopoverButton>
</template>
